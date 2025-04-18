// Importar las dependencias necesarias
import { serve } from "https://deno.land/std/http/server.ts";


// Obtener las variables de entorno necesarias
const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY")!;
const NOTION_TOKEN = Deno.env.get("NOTION_TOKEN")!;
const NOTION_DATABASE_ID = Deno.env.get("NOTION_DATABASE_ID")!;

// Función para verificar el token de reCAPTCHA
async function verifyRecaptcha(recaptchaToken: string) {
  try {
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    });

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await response.json();
    if (!data.success || (typeof data.score === 'number' && data.score < 0.5)) {
      throw new Error("Failed reCAPTCHA verification");
    }
    return data;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    throw new Error("reCAPTCHA verification failed");
  }
}

// Función principal que maneja la solicitud
serve(async (req) => {
  // CORS: Handling OPTIONS request
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    // Obtener el cuerpo de la solicitud (JSON)
    const body = await req.json();

    // Validar que todos los campos necesarios estén presentes
    const { type, teamName, email, date, teamSize, recaptchaToken, additionalInfo = "" } = body;

    if (!type || !teamName || !email || !date || !teamSize || !recaptchaToken) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Verificar el formato de la fecha (ISO 8601)
    const isValidDate = !isNaN(Date.parse(date));
    if (!isValidDate) {
      return new Response(JSON.stringify({ error: "Invalid date format" }), { status: 400 });
    }

    // Verificar la validez del token de reCAPTCHA
    try {
      await verifyRecaptcha(recaptchaToken);
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { status: 400 }
      );
    }

    // Preparar los datos para Notion
    const notionData = {
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: type === "windsurf" ? "Windsurf Workshop" : "Cursor Workshop" } }] },
        type: { rich_text: [{ text: { content: type } }] },
        teamName: { rich_text: [{ text: { content: teamName } }] },
        email: { email: email },
        date: { date: { start: date } },
        teamSize: { number: teamSize },
        additionalInfo: { rich_text: [{ text: { content: additionalInfo } }] },
      },
    };

    // Enviar la solicitud a la API de Notion
    const notionResponse = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notionData),
    });

    if (!notionResponse.ok) {
      const errorText = await notionResponse.text();
      throw new Error(`Notion API error: ${notionResponse.status} - ${errorText}`);
    }
    const notionResult = await notionResponse.json();

    // Responder con éxito
    return new Response(
      JSON.stringify({ message: "Workshop booked successfully", data: notionResult }),
      { status: 201 }
    );
  } catch (error) {
    // Manejo de errores en el backend
    console.error("Error:", error && (error.message || error));
    return new Response(
      JSON.stringify({ error: error && (error.message || error), details: error && error.stack }),
      { status: 500 }
    );
  }
});
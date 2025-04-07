<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-12 text-surface-700 dark:text-surface-100">Workshops for Small Teams</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Windsurf Workshop Card -->
      <div class="bg-surface-0 dark:bg-surface-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-center mb-6">
          <div class="p-4 bg-primary/10 dark:bg-primary/20 rounded-full">
            <i class="pi pi-wind text-4xl text-primary" />
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-surface-700 dark:text-surface-100">Windsurf Workshop</h2>
        <p class="text-surface-500 dark:text-surface-300 mb-6">Transform your development workflow with Windsurf's powerful AI coding assistant.</p>
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold text-surface-700 dark:text-surface-100">Team Size:</p>
            <p class="text-surface-500 dark:text-surface-300">5-7 developers</p>
          </div>
          <button @click="router.push('/workshops/book')" class="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2">
            <i class="pi pi-calendar-plus" />
            Book Workshop
          </button>
        </div>
      </div>

      <!-- Cursor Workshop Card -->
      <div class="bg-surface-0 dark:bg-surface-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-center mb-6">
          <div class="p-4 bg-primary/10 dark:bg-primary/20 rounded-full">
            <i class="pi pi-mouse-pointer text-4xl text-primary" />
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-surface-700 dark:text-surface-100">Cursor Workshop</h2>
        <p class="text-surface-500 dark:text-surface-300 mb-6">Enhance your team's productivity with Cursor's advanced AI pair programming.</p>
        <div class="flex justify-between items-center">
          <div>
            <p class="font-semibold text-surface-700 dark:text-surface-100">Team Size:</p>
            <p class="text-surface-500 dark:text-surface-300">5-7 developers</p>
          </div>
          <button @click="router.push('/workshops/book')" class="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2">
            <i class="pi pi-calendar-plus" />
            Book Workshop
          </button>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
        <h3 class="text-3xl font-bold mb-8 text-center text-surface-700 dark:text-surface-100">Why Choose Our Workshops?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="benefit in benefits" 
                :key="benefit.title" 
                class="workshop-benefit-card skill-card-hover overflow-hidden">
            <template #header>
              <div class="benefit-card-header relative overflow-hidden">
                <div class="benefit-illustration flex justify-center items-center h-full w-full">
                  <img v-if="benefit.image" :src="benefit.image" :alt="benefit.title" class="benefit-image" />
                  <i v-else :class="`${benefit.icon} text-6xl text-primary/70 benefit-icon`" />
                </div>
              </div>
            </template>
            <template #title>
              <div class="flex items-center gap-3 py-2">
                <i :class="`${benefit.icon} text-2xl text-primary`" />
                <h4 class="font-bold text-lg text-primary">{{ benefit.title }}</h4>
              </div>
            </template>
            <template #content>
              <p class="text-surface-600 dark:text-surface-300 leading-relaxed">{{ benefit.description }}</p>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Card from 'primevue/card'

const router = useRouter()

const benefits = [
  {
    title: "Tailored Learning",
    description: "Customized training sessions that address your team's specific needs and challenges.",
    icon: "pi pi-pencil",
    image: "/images/tailored-learning.svg"
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced professionals who have successfully implemented AI tools in real-world projects.",
    icon: "pi pi-user",
    image: "/images/expert-instructors.svg"
  },
  {
    title: "Practical Application",
    description: "Hands-on exercises and real-world examples to ensure immediate application of new skills.",
    icon: "pi pi-code",
    image: "/images/practical-application.svg"
  },
  {
    title: "Team Collaboration",
    description: "Workshops designed to foster team collaboration and knowledge sharing among participants.",
    icon: "pi pi-users",
    image: "/images/team-collaboration.svg"
  },
  {
    title: "Ongoing Support",
    description: "Access to follow-up sessions and continuous support after the workshop.",
    icon: "pi pi-headset",
    image: "/images/ongoing-support.svg"
  },
  {
    title: "ROI Focused",
    description: "Training programs designed to deliver measurable improvements in team productivity.",
    icon: "pi pi-chart-line",
    image: "/images/roi-focused.svg"
  }
]
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-1px);
}

/* Estilos para las tarjetas de beneficios */
.workshop-benefit-card {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.workshop-benefit-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.benefit-card-header {
  height: 180px;
  background: linear-gradient(135deg, var(--surface-50, #f8fafc) 0%, var(--surface-100, #f1f5f9) 100%);
}

:root[data-theme="dark"] .benefit-card-header {
  background: linear-gradient(135deg, var(--surface-800, #1e293b) 0%, var(--surface-900, #0f172a) 100%);
}

.benefit-illustration {
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.benefit-image {
  width: 100%;
  height: auto;
  max-height: 140px;
  object-fit: contain;
  z-index: 1;
}

.benefit-icon {
  transition: all 0.5s ease;
  font-size: 5rem;
  z-index: 1;
}

.workshop-benefit-card:hover .benefit-icon {
  transform: scale(1.1);
  opacity: 0.9;
}

/* Animación para el fondo de las ilustraciones */
.benefit-illustration::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(var(--primary-color-rgb, 79, 70, 229), 0.1) 0%, rgba(var(--primary-color-rgb, 79, 70, 229), 0) 70%);
  animation: rotate 15s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animaciones para las cards */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Animación suave para las cards al cargar */
.workshop-benefit-card {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Asegurarse de que las tarjetas aparezcan con un ligero retraso secuencial */
.workshop-benefit-card:nth-child(1) { animation-delay: 0.1s; }
.workshop-benefit-card:nth-child(2) { animation-delay: 0.2s; }
.workshop-benefit-card:nth-child(3) { animation-delay: 0.3s; }
.workshop-benefit-card:nth-child(4) { animation-delay: 0.4s; }
.workshop-benefit-card:nth-child(5) { animation-delay: 0.5s; }
.workshop-benefit-card:nth-child(6) { animation-delay: 0.6s; }
</style>

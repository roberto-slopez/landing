<template>
  <div class="container mx-auto px-4 py-8">
    <Toast />
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-surface-700 dark:text-surface-100">Book Your Workshop</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="text-sm text-surface-500 dark:text-surface-400 mb-4">
          <span class="text-surface-500 dark:text-surface-400">This form is protected by reCAPTCHA v3. No action is required from you.</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Workshop Type
          </label>
          <Dropdown
            v-model="form.workshopType"
            :options="workshopTypes"
            optionLabel="name"
            placeholder="Select a workshop"
            class="w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Team Name
          </label>
          <InputText
            v-model="form.teamName"
            class="w-full"
            placeholder="Enter your team name"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Contact Email
          </label>
          <InputText
            v-model="form.email"
            class="w-full"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Preferred Date
          </label>
          <Calendar
            v-model="form.date"
            dateFormat="mm/dd/yy"
            class="w-full"
            :minDate="minDate"
            :disabledDates="disabledDates"
            placeholder="Select a future date"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Team Size
          </label>
          <InputNumber
            v-model="form.teamSize"
            :min="1"
            :max="10"
            class="w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-surface-700 dark:text-surface-100 mb-2">
            Additional Information
          </label>
          <Textarea
            v-model="form.additionalInfo"
            class="w-full"
            rows="4"
            placeholder="Any additional information or requirements"
          />
        </div>

        <div v-if="recaptchaError" class="text-red-500 text-sm mb-4">
          {{ recaptchaError }}
        </div>

        <Button
          type="submit"
          label="Submit"
          class="w-full"
          :loading="loading"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import apiService from '../services/apiService'
import { useReCaptcha } from 'vue-recaptcha-v3'

const router = useRouter()
const toast = useToast()
const loading = ref(false)
const recaptchaError = ref('')

// Configuración del calendario para deshabilitar fechas pasadas
const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)
const minDate = tomorrow
const disabledDates = [today]

// Inicializar reCAPTCHA
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const workshopTypes = [
  { name: 'Windsurf Workshop', value: 'windsurf' },
  { name: 'Cursor Workshop', value: 'cursor' }
]

const form = ref({
  workshopType: null,
  teamName: '',
  email: '',
  date: null,
  teamSize: null,
  additionalInfo: ''
})

const validateForm = () => {
  if (!form.value.workshopType) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please select a workshop type',
      life: 3000
    })
    return false;
  }
  if (!form.value.teamName) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please enter your team name',
      life: 3000
    })
    return false;
  }
  if (!form.value.email) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please enter your email',
      life: 3000
    })
    return false;
  }
  if (!form.value.date) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please select a preferred date',
      life: 3000
    })
    return false;
  }
  if (!form.value.teamSize) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please enter your team size',
      life: 3000
    })
    return false;
  }
  return true;
}

const handleSubmit = async () => {
  try {
    if (!validateForm()) {
      console.log('Form validation failed')
      return;
    }

    loading.value = true
    recaptchaError.value = ''

    // (optional) Wait until recaptcha has been loaded.
    await recaptchaLoaded()
    console.log('reCAPTCHA loaded successfully')
    
    // Ejecutar reCAPTCHA
    const token = await executeRecaptcha('book_workshop')
    console.log('reCAPTCHA token received:', token.substring(0, 20) + '...')

    if (!token) {
      recaptchaError.value = 'reCAPTCHA verification failed. Please try again.'
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'reCAPTCHA verification failed. Please try again.',
        life: 3000
      })
      loading.value = false
      return
    }

    const formData = {
      type: form.value.workshopType.value,
      teamName: form.value.teamName,
      email: form.value.email,
      date: form.value.date,
      teamSize: form.value.teamSize,
      additionalInfo: form.value.additionalInfo,
      recaptchaToken: token
    }

    console.log('Sending workshop booking:', formData)

    try {
      await apiService.bookWorkshop(formData)
      
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Your workshop booking has been submitted successfully!',
        life: 3000
      })
      
      // Limpiar el formulario
      form.value = {
        workshopType: null,
        teamName: '',
        email: '',
        date: null,
        teamSize: null,
        additionalInfo: ''
      }
    } catch (error) {
      console.error('Error booking workshop:', error)
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'There was an error submitting your booking. Please try again.',
        life: 3000
      })
    } finally {
      loading.value = false
    }
  } catch (error) {
    console.error('Error during form submission:', error)
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.message || 'An unexpected error occurred. Please try again.',
      life: 3000
    })
    loading.value = false
  }
}
</script>

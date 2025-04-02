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
      <div class="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
        <h3 class="text-3xl font-bold mb-6 text-surface-700 dark:text-surface-100">Why Choose Our Workshops?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title" class="p-4 bg-surface-0 dark:bg-surface-900 rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors duration-200">
            <div class="flex items-center gap-3 mb-3">
              <i :class="benefit.icon" class="text-2xl text-primary" />
              <h4 class="font-semibold text-surface-700 dark:text-surface-100">{{ benefit.title }}</h4>
            </div>
            <p class="text-surface-500 dark:text-surface-300">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const benefits = [
  {
    title: "Tailored Learning",
    description: "Customized training sessions that address your team's specific needs and challenges.",
    icon: "pi pi-pencil"
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced professionals who have successfully implemented AI tools in real-world projects.",
    icon: "pi pi-user"
  },
  {
    title: "Practical Application",
    description: "Hands-on exercises and real-world examples to ensure immediate application of new skills.",
    icon: "pi pi-code"
  },
  {
    title: "Team Collaboration",
    description: "Workshops designed to foster team collaboration and knowledge sharing among participants.",
    icon: "pi pi-users"
  },
  {
    title: "Ongoing Support",
    description: "Access to follow-up sessions and continuous support after the workshop.",
    icon: "pi pi-headset"
  },
  {
    title: "ROI Focused",
    description: "Training programs designed to deliver measurable improvements in team productivity.",
    icon: "pi pi-chart-line"
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
[data-v-7f8f2e7e] {
  animation: float 3s ease-in-out infinite;
}
</style>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="min-h-screen">
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem" class="fixed top-0 left-0 right-0 z-50">
      <template #start>
        <div class="flex items-center gap-4">
          <Button 
            label="Home" 
            text 
            plain 
            icon="pi pi-home" 
            @click="navigateTo('/')"
            class="hover:text-primary transition-colors"
          />
          <Button 
            label="Workshops" 
            text 
            plain 
            icon="pi pi-book" 
            @click="navigateTo('/workshops')"
            class="hover:text-primary transition-colors"
          />
        </div>
      </template>
    </Toolbar>
    <div class="mt-16">
      <RouterView />
    </div>
  </div>
</template>

<style>
:root {
  --background-color: var(--p-surface);
}

body {
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}
</style>
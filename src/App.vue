<script setup>
import { ref } from 'vue';
let items = ref([{
        label: '',
        icon: 'pi pi-home'
    },
    {
        label: 'Skills',
        icon: 'pi pi-sparkles'
    }])
</script>
<template>
    <div class="flex flex-col gap-6 w-full sm:w-auto">
        <Menubar :model="items" />
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
                <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight">Eldin Sanchez</div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Passionate about crafting modern, high-performance solutions, including web applications, tools, scripts, plugins, and desktop applications.</div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Experienced in Symfony6, ESNext (JavaScript & TypeScript), React, Vue, Node.js, .NET, Python, Bash, PowerShell, and DevOps. </div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Always exploring cutting-edge technologies to build scalable and efficient software..</div>
                <div class="card flex justify-center flex-wrap gap-4">
                    <Button label="" icon="pi pi-twitter" rounded class="mt-4" />
                    <Button label="" icon="pi pi-linkedin" rounded class="mt-4" />
                    <Button label="" icon="pi pi-github" rounded class="mt-4" />
                </div>
            </div>
        </div>
    </div>
</template>
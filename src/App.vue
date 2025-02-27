<script setup>
import { ref } from 'vue';
let items = ref([
    {
        label: '',
        icon: 'pi pi-home'
    },
    {
        label: 'Skills',
        icon: 'pi pi-sparkles'
    }
]);
const otherskills = ref([]);
const softskils = ref([
    { label: 'Planning', years: '+7', icon: 'pi pi-table' },
    { label: 'Leadership', years: '+7', icon: 'pi pi-table' },
    { label: 'Teamwork', years: '17', icon: 'pi pi-table' },
    { label: 'Problem resolution', years: '17', icon: 'pi pi-table' },
    { label: 'Custumer support', years: '10', icon: 'pi pi-table' },
    { label: 'Training', years: '7', icon: 'pi pi-table' },
    { label: 'Agile (Kanban Extreme programing, Scrum)', years: '10', icon: 'pi pi-table' },
]);
const devops = ref([
    { label: 'AWS', years: '5', icon: 'pi pi-table' },
    { label: 'Azure', years: '+9', icon: 'pi pi-table' },
    { label: 'Git', years: '17', icon: 'pi pi-table' },
    { label: 'CD/CI/CT', years: '10', icon: 'pi pi-table' },
    { label: 'Networks', years: '12', icon: 'pi pi-table' },
    { label: 'Linux', years: '17', icon: 'pi pi-table' },
    { label: 'Windows', years: '17', icon: 'pi pi-table' },
    { label: 'Containers', years: '+7', icon: 'pi pi-table' },
]);
const programing = ref([
    { label: '.Net (C#, VB, C++)', years: '+7', icon: 'pi pi-table' },
    { label: 'Python', years: '+5', icon: 'pi pi-table' },
    { label: 'JavaScript', years: '17', icon: 'pi pi-table' },
    { label: 'NodeJS', years: '+13', icon: 'pi pi-table' },
    { label: 'Ruby', years: '+5', icon: 'pi pi-table' },
    { label: 'PHP', years: '+10', icon: 'pi pi-table' },
    { label: 'TypeScript', years: '5', icon: 'pi pi-table' },
    { label: 'React', years: '+7', icon: 'pi pi-table' },
    { label: 'Vue', years: '+5', icon: 'pi pi-table' },
    { label: 'Symfony', years: '+10', icon: 'pi pi-table' },
    { label: 'Ruby on Rails', years: '+5', icon: 'pi pi-table' },
    { label: 'Django', years: '+5', icon: 'pi pi-table' },
    { label: 'SQLServer', years: '+10', icon: 'pi pi-table' },
    { label: 'PostgreSQL', years: '+8', icon: 'pi pi-table' },
    { label: 'MongoDB', years: '+7', icon: 'pi pi-table' },
    { label: 'MySQL/MariaDB', years: '17', icon: 'pi pi-table' },
    { label: 'Redis', years: '7', icon: 'pi pi-table' },
    { label: 'Bash', years: '+10', icon: 'pi pi-table' },
    { label: 'Powershell', years: '+7', icon: 'pi pi-table' },
    { label: 'Unit Testing', years: '17', icon: 'pi pi-table' },
]);
</script>
<template>
    <div class="flex flex-col gap-6 w-full sm:w-auto">
        <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
            <template #start>
                <div class="flex items-center gap-2">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="var(--p-text-color)" />
                        <path d="..." fill="transparent" />
                    </svg>
                    <Button label="Skills" text plain icon="pi pi-sparkles" />
                </div>
            </template>
        </Toolbar>
        <div class="px-6 py-20 md:px-12 lg:px-20">
            <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
                <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight">Eldin Sanchez</div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Passionate about crafting modern, high-performance solutions, including web applications, tools, scripts, plugins, and desktop applications.</div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Experienced in Symfony6, ESNext (JavaScript & TypeScript), React, Vue, Node.js, .NET, Python, Bash, PowerShell, and DevOps. </div>
                <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Always exploring cutting-edge technologies to build scalable and efficient software..</div>
                <div class="card flex justify-center flex-wrap gap-4">
                    <Button label="" icon="pi pi-twitter" rounded class="mt-4" as="a" href="https://x.com/Roberto_SLopez" target="_blank" rel="noopener" />
                    <Button label="" icon="pi pi-linkedin" rounded class="mt-4" as="a" href="https://www.linkedin.com/in/roberto-slopez/" target="_blank" rel="noopener"/>
                    <Button label="" icon="pi pi-github" rounded class="mt-4" as="a" href="https://github.com/roberto-slopez" target="_blank" rel="noopener"/>
                    
                </div>
            </div>
        </div>
        <div class="card flex flex-col items-center overflow-hidden">
            <div class="flex flex-col items-center gap-2">
                <span class="text-xl font-medium">Scroll Down</span>
                <span class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <i class="pi pi-arrow-down" />
                </span>
            </div>
            <div class="h-[10rem]"></div>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">DevOps</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-4">
                <template v-for="val of devops" :key="i">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col">
                        <Card style="width: 25rem; overflow: hidden; background-color: var(--p-primary-color)" class="shadow">
                            <template #title>{{val.label}}</template>
                            <template #content>
                                <p class="m-0">
                                    Years: {{ val.years }}
                                </p>
                            </template>
                        </Card>
                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Programming</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="val of programing" :key="i">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col">
                        <Card style="width: 25rem; overflow: hidden; background-color: var(--p-primary-color)" class="shadow bg-primary">
                            <template #title>{{val.label}}</template>
                            <template #content>
                                <p class="m-0">
                                    Years: {{ val.years }}
                                </p>
                            </template>
                        </Card>
                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Soft Skills</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="val of softskils" :key="i">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col">
                        <Card style="width: 25rem; overflow: hidden; background-color: var(--p-primary-color)" class="shadow">
                            <template #title>{{val.label}}</template>
                            <template #content>
                                <p class="m-0">
                                    Years: {{ val.years }}
                                </p>
                            </template>
                        </Card>
                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Other skills</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="val of otherskills" :key="i">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col">
                        <Card style="width: 25rem; overflow: hidden; background-color: var(--p-primary-color)" class="shadow">
                            <template #title>{{val.label}}</template>
                            <template #content>
                                <p class="m-0">
                                    Years: {{ val.years }}
                                </p>
                            </template>
                        </Card>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
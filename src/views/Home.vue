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
    },
    {
        label: 'Workshops',
        icon: 'pi pi-book',
        to: '/workshops'
    }
]);
const otherskills = ref([
    { label: 'Payment Card Industry Data Security Standard (PCI DSS)', years: '+4', icon: 'pi pi-shield' },
    { label: 'Payment Card Industry Software Security Framework (PCI SSF)', years: '+4', icon: 'pi pi-shield' },
    { label: 'Cryptography & Security Protocols', years: '+4', icon: 'pi pi-lock' },
]);
const softskils = ref([
    { label: 'Strategic Planning', years: '+7', icon: 'pi pi-calendar' },
    { label: 'Team Leadership', years: '+7', icon: 'pi pi-users' },
    { label: 'Collaborative Teamwork', years: '17', icon: 'pi pi-share-alt' },
    { label: 'Problem Solving', years: '17', icon: 'pi pi-wrench' },
    { label: 'Customer Support & Relations', years: '10', icon: 'pi pi-comments' },
    { label: 'Technical Training & Mentoring', years: '7', icon: 'pi pi-book' },
    { label: 'Agile Methodologies (Kanban, Extreme Programming, Scrum)', years: '10', icon: 'pi pi-sync' },
]);
const devops = ref([
    { label: 'AWS', years: '5', icon: 'pi pi-cloud' },
    { label: 'Azure', years: '+9', icon: 'pi pi-cloud' },
    { label: 'Git', years: '17', icon: 'pi pi-code-branch' },
    { label: 'CD/CI/CT', years: '10', icon: 'pi pi-sync' },
    { label: 'Networks', years: '12', icon: 'pi pi-wifi' },
    { label: 'Linux', years: '17', icon: 'pi pi-server' },
    { label: 'Windows', years: '17', icon: 'pi pi-desktop' },
    { label: 'Containers', years: '+7', icon: 'pi pi-box' },
]);
const programing = ref([
    { label: '.Net (C#, VB, C++)', years: '+7', icon: 'pi pi-microsoft' },
    { label: 'Python', years: '+5', icon: 'pi pi-code' },
    { label: 'JavaScript', years: '17', icon: 'pi pi-code' },
    { label: 'NodeJS', years: '+13', icon: 'pi pi-server' },
    { label: 'Ruby', years: '+5', icon: 'pi pi-code-slash' },
    { label: 'PHP', years: '+10', icon: 'pi pi-code' },
    { label: 'TypeScript', years: '5', icon: 'pi pi-code-slash' },
    { label: 'React', years: '+7', icon: 'pi pi-bolt' },
    { label: 'Vue', years: '+5', icon: 'pi pi-bolt' },
    { label: 'Symfony', years: '+10', icon: 'pi pi-code' },
    { label: 'Ruby on Rails', years: '+5', icon: 'pi pi-code' },
    { label: 'Django', years: '+5', icon: 'pi pi-code' },
    { label: 'SQLServer', years: '+10', icon: 'pi pi-database' },
    { label: 'PostgreSQL', years: '+8', icon: 'pi pi-database' },
    { label: 'MongoDB', years: '+7', icon: 'pi pi-database' },
    { label: 'MySQL/MariaDB', years: '17', icon: 'pi pi-database' },
    { label: 'Redis', years: '7', icon: 'pi pi-database' },
    { label: 'Bash', years: '+10', icon: 'pi pi-terminal' },
    { label: 'Powershell', years: '+7', icon: 'pi pi-terminal' },
    { label: 'Unit Testing', years: '17', icon: 'pi pi-check-circle' },
]);

// Función para el scroll suave hacia abajo
const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills-section');
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Función para obtener un icono según la etiqueta de la habilidad
const getSkillIcon = (label) => {
  const name = label.toLowerCase();
  
  // DevOps
  if (name.includes('aws')) return 'pi pi-cloud';
  if (name.includes('azure')) return 'pi pi-server';
  if (name.includes('git')) return 'pi pi-code';
  if (name.includes('cd/ci')) return 'pi pi-sync';
  if (name.includes('networks')) return 'pi pi-wifi';
  if (name.includes('linux')) return 'pi pi-desktop';
  if (name.includes('windows')) return 'pi pi-desktop';
  if (name.includes('containers')) return 'pi pi-box';
  
  // Programming
  if (name.includes('.net') || name.includes('c#') || name.includes('vb')) return 'pi pi-microsoft';
  if (name.includes('python')) return 'pi pi-code';
  if (name.includes('javascript')) return 'pi pi-code';
  if (name.includes('node')) return 'pi pi-server';
  if (name.includes('ruby')) return 'pi pi-code-slash';
  if (name.includes('php')) return 'pi pi-code';
  if (name.includes('typescript')) return 'pi pi-code-slash';
  if (name.includes('react')) return 'pi pi-bolt';
  if (name.includes('vue')) return 'pi pi-bolt';
  if (name.includes('symfony')) return 'pi pi-code';
  if (name.includes('rails')) return 'pi pi-code';
  if (name.includes('django')) return 'pi pi-code';
  if (name.includes('sql') || name.includes('postgres') || name.includes('maria') || name.includes('mongo')) return 'pi pi-database';
  if (name.includes('redis')) return 'pi pi-database';
  if (name.includes('bash')) return 'pi pi-terminal';
  if (name.includes('powershell')) return 'pi pi-terminal';
  if (name.includes('test')) return 'pi pi-check-circle';
  
  // Soft Skills
  if (name.includes('planning')) return 'pi pi-calendar';
  if (name.includes('leadership')) return 'pi pi-users';
  if (name.includes('teamwork')) return 'pi pi-users';
  if (name.includes('problem')) return 'pi pi-question-circle';
  if (name.includes('customer') || name.includes('custumer')) return 'pi pi-comments';
  if (name.includes('training')) return 'pi pi-book';
  if (name.includes('agile')) return 'pi pi-sliders-h';
  
  // Default
  return 'pi pi-star-fill';
};
</script>
<template>
    <div class="flex flex-col gap-6 w-full sm:w-auto">
        <div class="profile-section px-6 py-20 md:px-12 lg:px-20">
            <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
                <div class="profile-title">Eldin Sanchez</div>
                <div class="profile-subtitle">Passionate about crafting modern, high-performance solutions, including web applications, tools, scripts, plugins, and desktop applications.</div>
                <div class="profile-subtitle">Experienced in Symfony6, ESNext (JavaScript & TypeScript), React, Vue, Node.js, .NET, Python, Bash, PowerShell, and DevOps. </div>
                <div class="profile-subtitle">Always exploring cutting-edge technologies to build scalable and efficient software.</div>
                <div class="card flex justify-center flex-wrap gap-4">
                    <Button label="" icon="pi pi-twitter" rounded class="mt-4 social-button social-twitter" as="a" href="https://x.com/Roberto_SLopez" target="_blank" rel="noopener" />
                    <Button label="" icon="pi pi-linkedin" rounded class="mt-4 social-button social-linkedin" as="a" href="https://www.linkedin.com/in/roberto-slopez/" target="_blank" rel="noopener"/>
                    <Button label="" icon="pi pi-github" rounded class="mt-4 social-button social-github" as="a" href="https://github.com/roberto-slopez" target="_blank" rel="noopener"/>
                </div>
            </div>
        </div>
        <div class="card flex flex-col items-center overflow-hidden">
            <div class="flex flex-col items-center gap-2">
                <span class="text-xl font-medium">Scroll Down</span>
                <Button 
                    @click="scrollToSkills" 
                    class="animate-bounce h-12 w-12 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-primary-600"
                >
                    <i class="pi pi-arrow-down" />
                </Button>
            </div>
            <div class="h-[10rem]"></div>
            <div id="skills-section" class="skills-section-title">DevOps</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-4">
                <template v-for="(val, index) of devops" :key="index">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" 
                        class="flex flex-col animate-fadeIn skill-card-wrapper" 
                        :class="'delay-' + (index % 5 + 1)"
                        style="width: 25rem"> 
                        
                        <Card class="h-full skill-card-hover" 
                              :style="{ borderTop: '3px solid var(--skill-devops)' }"> 
                            <template #title>
                                <div class="flex items-center gap-3"> 
                                    <i :class="getSkillIcon(val.label)" class="text-2xl"></i>
                                    <span :style="{ color: 'var(--skill-devops)' }">{{ val.label }}</span>
                                </div>
                            </template>
                            <template #content>
                                <div class="flex items-center"> 
                                    <i class="pi pi-clock mr-2"></i>
                                    <span>{{ val.years }} years</span>
                                </div>
                            </template>
                        </Card>

                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="skills-section-title">Programming</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="(val, index) of programing" :key="index">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" 
                        class="flex flex-col animate-fadeIn" 
                        :class="'delay-' + (index % 5 + 1)"
                        style="width: 25rem"> 
                        
                        <Card class="h-full skill-card-hover" 
                              :style="{ borderTop: '3px solid var(--skill-programming)' }"> 
                            <template #title>
                                <div class="flex items-center gap-3"> 
                                    <i :class="getSkillIcon(val.label)" class="text-2xl"></i>
                                    <span :style="{ color: 'var(--skill-programming)' }">{{ val.label }}</span>
                                </div>
                            </template>
                            <template #content>
                                <div class="flex items-center"> 
                                    <i class="pi pi-clock mr-2"></i>
                                    <span>{{ val.years }} years</span>
                                </div>
                            </template>
                        </Card>

                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="skills-section-title">Soft Skills</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="(val, index) of softskils" :key="index">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" 
                        class="flex flex-col animate-fadeIn" 
                        :class="'delay-' + (index % 5 + 1)"
                        style="width: 25rem"> 
                        
                        <Card class="h-full skill-card-hover" 
                              :style="{ borderTop: '3px solid var(--skill-soft)' }"> 
                            <template #title>
                                <div class="flex items-center gap-3"> 
                                    <i :class="getSkillIcon(val.label)" class="text-2xl"></i>
                                    <span :style="{ color: 'var(--skill-soft)' }">{{ val.label }}</span>
                                </div>
                            </template>
                            <template #content>
                                <div class="flex items-center"> 
                                    <i class="pi pi-clock mr-2"></i>
                                    <span>{{ val.years }} years</span>
                                </div>
                            </template>
                        </Card>

                    </div>
                </template>
            </div>
            <div class="h-[5rem]"></div>
            <div class="skills-section-title">Other skills</div>
            <br/>
            <div class="flex flex-wrap justify-center gap-8">
                <template v-for="(val, index) of otherskills" :key="index">
                    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" 
                        class="flex flex-col animate-fadeIn" 
                        :class="'delay-' + (index % 5 + 1)"
                        style="width: 25rem"> 
                        
                        <Card class="h-full skill-card-hover" 
                              :style="{ borderTop: '3px solid var(--skill-other)' }"> 
                            <template #title>
                                <div class="flex items-center gap-3"> 
                                    <i :class="getSkillIcon(val.label)" class="text-2xl"></i>
                                    <span :style="{ color: 'var(--skill-other)' }">{{ val.label }}</span>
                                </div>
                            </template>
                            <template #content>
                                <div class="flex items-center"> 
                                    <i class="pi pi-clock mr-2"></i>
                                    <span>{{ val.years }} years</span>
                                </div>
                            </template>
                        </Card>

                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
import 'primeicons/primeicons.css';
import './style.css';

import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { createRouter, createWebHistory } from 'vue-router';

import { createApp } from 'vue';
import App from './App.vue';
import AppState from './plugins/appState.js';
import router from './router/index.js';

const app = createApp(App);

// Configurar PrimeVue con tema oscuro/claro automático
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        ripple: true,
        cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue'
        },
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

// Registrar componentes de PrimeVue globalmente
app.component('Toolbar', Toolbar);
app.component('Button', Button);

app.directive('animateonscroll', AnimateOnScroll);
app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.mount('#app');
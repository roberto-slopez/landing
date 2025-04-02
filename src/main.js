import 'primeicons/primeicons.css';
import './style.css';

import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';
import { VueReCaptcha } from 'vue-recaptcha-v3'

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

// Configurar reCAPTCHA
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
    timeout: 5000,
    onerror: (error) => {
      console.error('reCAPTCHA initialization error:', error);
    },
    onload: () => {
      console.log('reCAPTCHA loaded successfully');
    }
  }
});

// Registrar componentes de PrimeVue globalmente
app.component('Toolbar', Toolbar);
app.component('Button', Button);

app.directive('animateonscroll', AnimateOnScroll);
app.use(AppState);
app.use(ConfirmationService);
app.use(DialogService);
app.use(router);

app.use(ToastService, {
  position: 'bottom-right',
  life: 3000
})

app.mount('#app');
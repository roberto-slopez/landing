import 'primeicons/primeicons.css';
import './style.css';

import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';

import { createApp } from 'vue';
import App from './App.vue';
import AppState from './plugins/appState.js';

const app = createApp(App);
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

app.directive('animateonscroll', AnimateOnScroll);
app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.mount('#app');
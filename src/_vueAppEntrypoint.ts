import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";
import Aura from '@primevue/themes/aura';
console.log('_vueAppEntrypoint');

export default (app: App) => {
    console.log('init primevue');
    app.use(PrimeVue, {
        // unstyled: true,
        theme: {
            preset: Aura
        }
    });
    app.use(ToastService);
};
import { createApp } from 'vue';
import App from './components/App/AppRoot.vue';
import { i18n } from '@/use/use18n';

createApp(App)
  .use(i18n)
  .mount('#app');

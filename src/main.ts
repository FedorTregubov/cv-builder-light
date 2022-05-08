import { createApp } from 'vue';
import App from './components/App/AppRoot.vue';
import { i18n } from '@/use/use18n';
import VueClickAway from 'vue3-click-away';

createApp(App)
  .use(i18n)
  .use(VueClickAway)
  .mount('#app');

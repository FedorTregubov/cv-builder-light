import { defineComponent } from 'vue';
import { AppHeaderEvents } from "./AppHeader.model";
import IconPrint from '@/components/shared/icons/IconPrint.vue';
import AppLangSelect from '@/components/shared/AppLangSelect/AppLangSelect.vue';

export default defineComponent({
  name: 'AppHeader',

  components: { IconPrint, AppLangSelect },

  emits: Object.values(AppHeaderEvents),

  setup(_, { emit }) {
    const onPrint = (): void => {
      emit(AppHeaderEvents.print);
    };

    return {
      onPrint,
    };
  },
});

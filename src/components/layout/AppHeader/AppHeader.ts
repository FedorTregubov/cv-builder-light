import { defineComponent } from 'vue';
import IconPrint from '@/components/shared/icons/IconPrint.vue';
import { AppHeaderEvents } from "./AppHeader.model";

export default defineComponent({
  name: 'AppHeader',

  components: { IconPrint },

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

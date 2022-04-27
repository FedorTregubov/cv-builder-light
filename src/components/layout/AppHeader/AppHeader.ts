import { defineComponent } from 'vue';
import IconPrint from '@/components/shared/icons/IconPrint.vue';

export default defineComponent({
  name: 'AppHeader',

  components: { IconPrint },

  emits: ['print'],

  setup(_, { emit }) {
    const onPrint = (): void => {
      emit('print');
    };

    return {
      onPrint,
    };
  },
});

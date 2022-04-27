import { defineComponent, ref } from "vue";
import { AppTitle, AppTitleSizes } from '@/components/shared/AppTitle';

export default defineComponent({
  name: 'AppRange',

  components: { AppTitle },

  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 90,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 10,
    },
  },

  setup(props) {
    const modelValue = ref(props.value);

    return {
      modelValue,
      AppTitleSizes,
    };
  },
});

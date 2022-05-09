import { defineComponent, ref, computed } from 'vue';
import IconArrow from '@/components/shared/icons/IconArrow.vue';

export interface AppLangSelectItem {
  value: string | number;
  label: string;
}

export default defineComponent({
  name: 'AppLangSelect',

  components: { IconArrow },

  props: {
    items: {
      type: Array as () => AppLangSelectItem[],
      default: () => [],
    },
    value: {
      type: Object as () => AppLangSelectItem,
      default: null,
    },
  },

  emit: ['change'],

  setup (props, { emit }) {
    const el = ref<null | HTMLElement>(null);
    const isOpen = ref(false);

    const filteredItems = computed<AppLangSelectItem[]>(() => {
      return JSON.parse(JSON.stringify(props.items))
        .sort((a: AppLangSelectItem, b: AppLangSelectItem) => {
          return a.label > b.label;
        });
    });

    const modelValue = ref<AppLangSelectItem | null>(props.value);

    const onListToggle = (): void => {
      isOpen.value = !isOpen.value;
    };

    const setModelValue = (item: AppLangSelectItem): void => {
      if (modelValue.value?.value !== item.value) {
        modelValue.value = { ...item };
        emit('change', modelValue.value);
      }
      onListToggle();
    }

    const onClickAway = (): void => {
      isOpen.value = false;
    };

    return {
      el,
      isOpen,
      filteredItems,
      modelValue,
      setModelValue,
      onListToggle,
      onClickAway,
    };
  },
});

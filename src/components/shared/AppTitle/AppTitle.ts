import { defineComponent, h } from 'vue';
import { AppTitleSizes } from './types';

export default defineComponent({
  name: 'AppTitle',

  props: {
    size: {
      type: String,
      default: AppTitleSizes.md,
      validator: (size: AppTitleSizes) => Object.values(AppTitleSizes).includes(size),
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
    isButtonAddVisible: {
      type: Boolean,
      default: false,
    },
    isButtonRmVisible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['add', 'rm'],

  setup(props, { slots, emit }) {
    const renderText = () => {
      const classNames = [
        'px-2 py-1 rounded-md outline-none whitespace-normal break-all',
        `text-${props.size}`,
        props.isSecondary ? 'text-gray-400' : 'uppercase font-semibold text-gray-800',
        props.isEditable ? 'w-full focus:bg-slate-100' : ''
      ];

      return h('div', {
        class: classNames,
        contentEditable: props.isEditable,
        suppressContentEditableWarning: true,
        spellCheck: false,
      }, { default: slots.default })
    };

    const renderButtonAdd = () => h('button', {
      class: 'inline-flex items-center px-2 text-center font-semibold text-sky-300 print:hidden',
      onClick: () => emit('add'),
    }, '+');

    const renderButtonRm = () => h('button', {
      class: 'inline-flex items-center px-2 text-center font-semibold text-red-500 print:hidden'
    }, '-');

    return () => h('div', {
      class: 'flex items-center',
    }, [
      renderText(),
      props.isButtonAddVisible && renderButtonAdd(),
      props.isButtonRmVisible && renderButtonRm()
    ]);
  },
});

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: 'AppAvatar',

  props: {
    hint: {
      type: String,
      default: 'Upload Avatar',
    },
  },

  setup() {
    const imgSelected = ref<null | File>(null);
    const imgPreview = ref('');

    const onChangeImg = (event: Event | DragEvent): void => {
      const data = (event as DragEvent).dataTransfer
        || (event as Event).target as HTMLInputElement;

      if (data?.files) {
        imgSelected.value = data.files[0];
      }
    };

    watch(() => imgSelected.value, () => {
      const objUrl = imgSelected.value && URL.createObjectURL(imgSelected.value);

      imgPreview.value = objUrl ?? '';
    });

    return {
      imgSelected,
      imgPreview,
      onChangeImg,
    };
  },
});

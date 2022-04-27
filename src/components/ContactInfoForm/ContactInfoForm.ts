import { defineComponent } from "vue";
import AppAvatar from "@/components/shared/AppAvatar/AppAvatar.vue";
import { AppTitle, AppTitleSizes } from "@/components/shared/AppTitle";

export default defineComponent({
  name: 'ContactInfoForm',

  components: {
    AppAvatar,
    AppTitle,
  },

  setup() {
    return {
      AppTitleSizes
    };
  },
});

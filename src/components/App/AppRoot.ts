import { defineComponent } from "vue";
import AppHeader from '@/components/layout/AppHeader/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue';
import ContactInfoForm from "@/components/ContactInfoForm/ContactInfoForm.vue";
import ExperienceInfoForm from "@/components/ExperienceInfoForm/ExperienceInfoForm.vue";

export default defineComponent({
  name: 'AppRoot',

  components: {
    AppHeader,
    AppFooter,
    ContactInfoForm,
    ExperienceInfoForm,
  },

  setup() {
    const onPrint = (): void => window.print();

    return {
      onPrint,
    };
  },
});

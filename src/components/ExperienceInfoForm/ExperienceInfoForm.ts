import { defineComponent, ref } from "vue";
import { AppTitle, AppTitleSizes } from "@/components/shared/AppTitle";
import AppRange from '@/components/shared/AppRange/AppRange.vue';

export default defineComponent({
  name: 'ExperienceInfoForm',

  components: {
    AppTitle,
    AppRange,
  },

  setup() {
    const skillsCounter = ref(1);
    const onAddSkill = (): void => {
      skillsCounter.value += 1;
    };

    return {
      AppTitleSizes,
      skillsCounter,
      onAddSkill,
    };
  },
})

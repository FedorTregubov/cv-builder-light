import { computed, defineComponent, nextTick, ref } from "vue";
import { AppTitle, AppTitleSizes } from "@/components/shared/AppTitle";
import AppRange from '@/components/shared/AppRange/AppRange.vue';
import IconTrash from '@/components/shared/icons/IconTrash.vue';
import { cvInit } from '@/data/mocks/cv.mock.data';
import { Skill } from "@/models";

export default defineComponent({
  name: 'ExperienceInfoForm',

  components: {
    AppTitle,
    AppRange,
    IconTrash,
  },

  setup() {
    const skills = ref([new Skill()]);
    const skillsRefs = ref<(Element)[]>([]);

    const setSkillRef = (el: null | Element): string => {
      !!el && skillsRefs.value.push(el as Element);

      return String(el);
    };

    const focusLastSkillTitle = async (): Promise<void> => {
      await nextTick();

      const lastSkillElement = skillsRefs.value[skillsRefs.value.length - 1] as HTMLInputElement;
      const lastSkillElementInput: null | HTMLInputElement = lastSkillElement.querySelector('[contenteditable]');
      lastSkillElementInput?.focus();
    };

    const onAddSkill = (): void => {
      skills.value.push(new Skill());
      focusLastSkillTitle();
    };

    const onRmSkill = (id: Skill['id']): void => {
      const candidateIndex = skills.value.findIndex((skill) => skill.id === id);

      if (!~candidateIndex) return;
      skills.value.splice(candidateIndex, 1);
    };

    const isSkillRmBtnAvailable = computed(() => skills.value.length > 1);

    return {
      AppTitleSizes,
      skills,
      skillsRefs,
      setSkillRef,
      onAddSkill,
      onRmSkill,
      isSkillRmBtnAvailable,
      cvInit: cvInit.experienceInfo,
    };
  },
})

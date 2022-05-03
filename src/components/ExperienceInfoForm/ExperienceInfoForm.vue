<template>
  <!--full-name-->
  <AppTitle
    :size="AppTitleSizes.lg"
    is-editable
  >
    {{ cvInit.fullName }}
  </AppTitle>

  <!--about-->
  <AppTitle
    :size="AppTitleSizes.sm"
    is-editable
    is-secondary
  >
    {{ cvInit.about }}
  </AppTitle>

  <!--relevant-experience-->
  <AppTitle class="mt-4">
    Relevant experience
  </AppTitle>
  <AppTitle
    :size="AppTitleSizes.sm"
    is-editable
    is-secondary
  >
    {{ cvInit.relevantExperience }}
  </AppTitle>

  <!--education-->
  <AppTitle class="mt-4">
    Education
  </AppTitle>
  <AppTitle
    :size="AppTitleSizes.sm"
    is-editable
    is-secondary
  >
    {{ cvInit.education }}
  </AppTitle>

  <!--skills-->
  <AppTitle
    class="mt-4"
    :is-button-add-visible="true"
    @add="onAddSkill"
  >
    Skills
  </AppTitle>

  <div class="md:flex md:flex-wrap md:items-start">
    <div
      v-for="skill in skills"
      :key="`skill-${skill.id}`"
      :ref="setSkillRef"
      class="relative grow-1 shrink-0 md:basis-1/3 print:basis-1/3"
    >
      <button
        v-show="isSkillRmBtnAvailable"
        class="absolute right-0 top-4 inline-flex items-center px-2 text-center font-semibold text-sky-300 outline-none print:hidden"
        :disabled="!isSkillRmBtnAvailable"
        @click.prevent="onRmSkill(skill.id)"
      >
        <IconTrash class="w-4 h-4 fill-sky-300" />
      </button>
      <AppRange
        v-bind="{ ...skill }"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./ExperienceInfoForm.ts"></script>

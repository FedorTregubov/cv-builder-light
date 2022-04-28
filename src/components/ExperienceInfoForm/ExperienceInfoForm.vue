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
      v-for="index in skillsCounter"
      :key="`skill-${index}`"
      class="grow-1 shrink-0 md:basis-1/3 print:basis-1/3"
    >
      <AppRange
        v-bind="{ ...cvInit.skills[0] }"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./ExperienceInfoForm.ts"></script>

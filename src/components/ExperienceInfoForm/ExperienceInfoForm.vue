<template>
  <!--name-->
  <AppTitle
    :size="AppTitleSizes.lg"
    is-editable
  >
    John Smith
  </AppTitle>

  <!--about-->
  <AppTitle
    :size="AppTitleSizes.sm"
    is-editable
    is-secondary
  >
    Experienced software engineer who constantly seeks out innovative solutions to everyday problems.
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
    Jan 2021 - Mar 2022 Frontend developer at "Awesome Candy Shop".
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
    2014-2018 Brno University of Technology - BS Electrical Engineering.
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
        :title="'Vue'"
        :value="90"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./ExperienceInfoForm.ts"></script>

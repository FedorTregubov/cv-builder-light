<template>
  <AppAvatar />

  <div class="mt-4">
    <!--position-->
    <AppTitle is-editable>
      Software Engineer
    </AppTitle>

    <!--location-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      Hannover, Germany
    </AppTitle>
  </div>

  <div class="mt-4">
    <!--email-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      john.smith@gmail.com
    </AppTitle>

    <!--phone-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      +49 000 000 00 00
    </AppTitle>
  </div>
</template>
<script lang="ts" src="./ContactInfoForm.ts"></script>

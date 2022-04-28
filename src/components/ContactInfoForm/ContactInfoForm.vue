<template>
  <AppAvatar />

  <div class="mt-4">
    <!--position-->
    <AppTitle is-editable>
      {{ cvInit.position }}
    </AppTitle>

    <!--location-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      {{ cvInit.location }}
    </AppTitle>
  </div>

  <div class="mt-4">
    <!--email-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      {{ cvInit.email }}
    </AppTitle>

    <!--phone-->
    <AppTitle
      :size="AppTitleSizes.sm"
      is-editable
      is-secondary
    >
      {{ cvInit.phone }}
    </AppTitle>
  </div>
</template>
<script lang="ts" src="./ContactInfoForm.ts"></script>

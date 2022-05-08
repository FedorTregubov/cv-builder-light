<template>
  <AppSelect
    :value="langModel"
    :items="langItems"
    @change="onLangChange"
  >
  </AppSelect>
</template>
<script lang="ts" src="./AppLangSelect.ts"></script>

<template>
  <AppSelect
    :value="langModel"
    :items="langItems"
    @change="onLangChange"
  >
    <template #value>
      <div class="flex items-center">
        <img
          class="mr-2"
          :src="`/img/flags/${getFlagName(langModel)}.svg`"
          :alt="langModel.label"
          width="24"
          height="24"
        />
        {{ langModel.label }}
      </div>
    </template>

    <template v-slot="{ item }">
      <div class="flex items-center">
        <img
          class="mr-2"
          :src="`/img/flags/${getFlagName(item)}.svg`"
          :alt="item.label"
          width="24"
          height="24"
        />
        {{ item.label }}
      </div>
    </template>
  </AppSelect>
</template>
<script lang="ts" src="./AppLangSelect.ts"></script>

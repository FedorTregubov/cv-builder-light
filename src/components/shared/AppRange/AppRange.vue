<template>
  <div class="app-range py-2">
    <div class="flex items-center w-full text-gray-400">
      <AppTitle
        :size="AppTitleSizes.sm"
        is-editable
        is-secondary
      >
        {{ title }}
      </AppTitle>
      <span>- {{ modelValue }}</span>
    </div>

    <div class="mt-2 px-2">
      <input
        type="range"
        class="app-range__input print:hidden"
        v-bind="{
          min,
          max,
          step,
        }"
        v-model="modelValue"
      />

      <div class="app-range__range-bar hidden print:block">
        <div
          class="app-range__range-bar-progress"
          :style="{ width: `${modelValue}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./AppRange.ts"></script>
<style lang="scss" src="./AppRange.scss"></style>

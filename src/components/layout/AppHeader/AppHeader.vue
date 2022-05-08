<template>
  <header>
    <div class="container mx-auto">
      <div class="flex justify-between align-middle py-5">
        <span class="inline-flex items-center uppercase text-sky-300">
          CV Builder
          <sup class="ml-1 lowercase">Light</sup>
        </span>

        <button
          class="inline-flex items-center h-8 px-5 rounded-full outline-none bg-sky-300 font-semibold text-white"
          data-test="app-header__button-print"
          @click.prevent="onPrint"
        >
          <IconPrint class="w-4 h-4 mr-2 fill-white" />
          {{ $t('print') }}
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" src="./AppHeader.ts"></script>

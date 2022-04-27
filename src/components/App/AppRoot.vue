<template>
  <div class="app-root flex flex-col h-full">
    <div class="grow-0 shrink-0 basis-0 print:hidden">
      <AppHeader @print="onPrint" />
    </div>

    <main class="grow-1 shrink-1 basis-full">
      <div class="container mx-auto print:p-0">
        <div class="p-8 rounded-lg bg-white shadow-md shadow-gray-200 print:shadow-none print:p-0">
          <div class="flex flex-col md:flex-row print:flex-row">
            <div class="grow-0 shrink-0 basis-1/4 pr-4 print:basis-1/3">
              <ContactInfoForm />
            </div>

            <div class="flex-grow shrink-1 mt-4 md:mt-0">
              <ExperienceInfoForm />
            </div>
          </div>
        </div>
      </div>
    </main>

    <div class="grow-0 shrink-0 basis-0 print:hidden">
      <AppFooter />
    </div>
  </div>
</template>
<script lang="ts" src="./AppRoot.ts"></script>
<style lang="scss" src="./AppRoot.scss"></style>

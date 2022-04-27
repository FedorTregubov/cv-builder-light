<template>
  <footer>
    <div class="container mx-auto">
      <div class="py-5 text-center">
        <a
          class="text-sky-300"
          data-test="app-footer__link"
          :href="APP_GITHUB_LINK"
          title="Github project link"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" src="./AppFooter.ts"></script>

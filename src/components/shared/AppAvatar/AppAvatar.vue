<template>
  <label
    :class="[
      'relative',
      'flex',
      'justify-center',
      'items-center',
      'w-40',
      'h-40',
      'rounded-full',
      'bg-gray-100',
      'cursor-pointer',
    ]"
    @dragover.prevent
    @drop.prevent="onChangeImg"
  >
    <input
      type="file"
      class="absolute left-0 top-0 block w-full h-full opacity-0 invisible"
      value=""
      @change="onChangeImg"
    >

    <img
      v-if="imgPreview"
      class="absolute top-0 left-0 block w-full h-full rounded-full object-cover"
      :src="imgPreview"
      alt="avatar"
      width="160"
      height="160"
    />

    <span
      v-else
      class="text-gray-600"
    >
      {{ hint }}
    </span>
  </label>
</template>
<script lang="ts" src="./AppAvatar.ts"></script>

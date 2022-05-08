<template>
  <div
    ref="el"
    class="app-select relative text-gray-800"
    :class="{ '--is-open': isOpen }"
    v-click-away="onClickAway"
  >
    <!--input-->
    <div
      class="relative flex items-center px-2 py-1 cursor-pointer"
      :class="{ '--focus' : isOpen }"
      @click="onListToggle"
    >
      <div>
        <slot name="value">
          {{ modelValue.label }}
        </slot>
      </div>

      <IconArrow
        class="app-select__icon-arrow w-4 h-4 fill-gray-800 ml-2 origin-center"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>

    <!--options-list-->
    <ul
      v-show="isOpen"
      class="app-select__list absolute right-0 w-120 mt-2 rounded-lg bg-white drop-shadow-md"
    >
      <li
        v-for="filteredItem in filteredItems"
        :key="`app-select__item-${filteredItem.value}`"
        class="p-2 pointer bg-white whitespace-nowrap cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100"
        @click="setModelValue(filteredItem)"
      >
        <slot :item="filteredItem">
          {{ filteredItem.label }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./AppSelect.ts"></script>

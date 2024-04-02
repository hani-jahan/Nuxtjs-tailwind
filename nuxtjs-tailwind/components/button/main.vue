<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-iranSans font-normal
    bg-primary-mainSet-enable text-onPrimary-mainSet-enable
    hover:bg-primary-mainSet-hover hover:text-onPrimary-mainSet-hover
    active:bg-primary-mainSet-pressed active:text-onPrimary-mainSet-pressed
    disabled:bg-primary-mainSet-disable disabled:text-onPrimary-mainSet-disable
    
    dark:bg-dark-primary-mainSet-enable dark:text-dark-onPrimary-mainSet-enable
    dark:hover:bg-dark-primary-mainSet-hover dark:hover:text-dark-onPrimary-mainSet-hover
    dark:active:bg-dark-primary-mainSet-pressed dark:active:text-dark-onPrimary-mainSet-pressed
    dark:disabled:bg-dark-primary-mainSet-disable dark:disabled:text-dark-onPrimary-mainSet-disable"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

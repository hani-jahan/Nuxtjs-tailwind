<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-normal
    bg-primary-main text-onPrimary-main
    hover:bg-primary-main-hover hover:text-onPrimary-main-hover
    active:bg-primary-main-active active:text-onPrimary-main-active
    disabled:bg-primary-main-disable disabled:text-onPrimary-main-disable
    
    dark:bg-dark-primary-main dark:text-dark-onPrimary-main
    dark:hover:bg-dark-primary-main-hover dark:hover:text-dark-onPrimary-main-hover
    dark:active:bg-dark-primary-main-active dark:active:text-dark-onPrimary-main-active
    dark:disabled:bg-dark-primary-main-disable dark:disabled:text-dark-onPrimary-main-disable"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-normal
    bg-primary text-onPrimary
    hover:bg-primary-hover hover:text-onPrimary-hover
    active:bg-primary-active active:text-onPrimary-active
    disabled:bg-primary-disable disabled:text-onPrimary-disable
    
    dark:bg-dark-primary dark:text-dark-onPrimary
    dark:hover:bg-dark-primary-hover dark:hover:text-dark-onPrimary-hover
    dark:active:bg-dark-primary-active dark:active:text-dark-onPrimary-active
    dark:disabled:bg-dark-primary-disable dark:disabled:text-dark-onPrimary-disable"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

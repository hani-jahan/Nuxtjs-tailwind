<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-normal
    bg-primary text-onprimary
    hover:bg-primary-hover hover:text-onprimary-hover
    active:bg-primary-active active:text-onprimary-active
    disabled:bg-primary-disabled disabled:text-onprimary-disabled
    
    dark:bg-dark-primary dark:text-dark-onprimary
    dark:hover:bg-dark-primary-hover dark:hover:text-dark-onprimary-hover
    dark:active:bg-dark-primary-active dark:active:text-dark-onprimary-active
    dark:disabled:bg-dark-primary-disabled dark:disabled:text-dark-onprimary-disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

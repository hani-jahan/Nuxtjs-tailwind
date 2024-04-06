<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-normal
    bg-transparent text-onPrimary-outline
    hover:bg-primary-outline-hover hover:text-onPrimary-outline-hover 
    active:bg-primary-outline-active active:text-onPrimary-outline-active 
    disabled:bg-transparent disabled:text-onPrimary-outline-disable

    dark:text-dark-onPrimary-outline
    dark:hover:bg-dark-primary-outline-hover dark:hover:text-dark-onPrimary-outline-hover 
    dark:active:bg-dark-primary-outline-active dark:active:text-dark-onPrimary-outline-active 
    dark:disabled:text-dark-onPrimary-outline-disable
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

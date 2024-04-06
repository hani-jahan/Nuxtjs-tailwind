<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-normal
    bg-transparent text-onprimary-outline
    hover:bg-primary-outline-hover hover:text-onprimary-outline-hover 
    active:bg-primary-outline-active active:text-onprimary-outline-active 
    disabled:bg-transparent disabled:text-onprimary-outline-disabled

    dark:text-dark-onprimary-outline
    dark:hover:bg-dark-primary-outline-hover dark:hover:text-dark-onprimary-outline-hover 
    dark:active:bg-dark-primary-outline-active dark:active:text-dark-onprimary-outline-active 
    dark:disabled:text-dark-onprimary-outline-disabled
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

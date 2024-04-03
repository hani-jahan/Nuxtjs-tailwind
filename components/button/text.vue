<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-iranSans font-normal
    bg-transparent text-onPrimary-var
    hover:bg-primary-var-hover hover:text-onPrimary-var-hover 
    active:bg-primary-var-active active:text-onPrimary-var-active 
    disabled:bg-transparent disabled:text-onPrimary-var-disable"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

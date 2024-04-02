<template>
  <button
    class="py-3 px-5 text-center rounded-lg leading-6 text-base font-iranSans font-normal border-2

    bg-transparent text-onPrimary-varSet-enable border-onPrimary-varSet-enable
    
    hover:bg-primary-varSet-hover hover:text-onPrimary-varSet-hover hover:border-onPrimary-varSet-hover
    
    active:bg-primary-varSet-pressed active:text-onPrimary-varSet-pressed active:border-onPrimary-varSet-pressed
    
    disabled:bg-transparent disabled:text-onPrimary-varSet-disable disabled:border-onPrimary-varSet-disable"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>

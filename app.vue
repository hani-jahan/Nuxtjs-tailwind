<template>
  <div class="font-iranSans">
    <div class="text-lg-display-1">test page: این نویسه‌ی نمایشی نخست است.</div>
    <div class="text-lg-display-2">
      test page: این نویسه‌ی نمایشی دُیُم است .
    </div>
    <div class="text-sm-display-1">test page: این نویسه‌ی نمایشی نخست است.</div>
    <div class="text-sm-display-2">
      test page: این نویسه‌ی نمایشی دُیُم است .
    </div>
    <div
      class="space-x-3 space-y-3 p-3 bg-surface-bright dark:bg-dark-surface-bright"
    >
      <h1>light:</h1>
      <ButtonMain text="افزودن به سبد خرید" />
      <ButtonMain disabled text="افزودن به سبد خرید" />
      <br />
      <ButtonOutline text="افزودن به سبد خرید" />
      <ButtonOutline disabled text="افزودن به سبد خرید" />
      <br />
      <ButtonText text="افزودن به سبد خرید" />
      <ButtonText disabled text="افزودن به سبد خرید" />
    </div>

    <div
      class="dark space-x-3 p-3 bg-surface-bright dark:bg-dark-surface-bright"
    >
      <h1 class="text-dark-onSurfCont-high">dark:</h1>
      <ButtonMain text="افزودن به سبد خرید" />
    </div>
  </div>
</template>

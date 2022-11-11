<template>
  <header class="py-4 md:py-6 | border-b-gray-300 border-b">
    <nav class="r-mx | flex flex-wrap gap-y-2 md:gap-x-6 lg:gap-x-0 items-center">
      <div :class="md ? 'order-3' : 'order-none'" class="pr-2 lg:hidden">
        <button class="w-8 align-middle" :tabindex="md ? 4 : 1">
          <img src="/icons/hamburger.png" alt="Menu" />
        </button>
      </div>
      <div
        :class="md ? 'order-1' : 'order-none'"
        class="grow shrink basis-[60%] md:basis-auto translate-y-[2px]"
      >
        <a class="block" :tabindex="md ? 1 : 2" href="/"
          ><img src="/img/logo.svg" alt="DigitalDeals"
        /></a>
      </div>
      <div :class="md ? 'order-4' : 'order-none'" class="grow md:grow-0 lg:grow">
        <div :tabindex="md ? 5 : 3" class="search-wrapper gradient-border">
          <input
            class="py-2 grow md:sr-only lg:not-sr-only focus:outline-none"
            type="search"
            placeholder="Search for digital products..."
          />
          <button class="md:p-2"><img src="/icons/search.svg" alt="Search" /></button>
        </div>
      </div>
      <div
        :class="md ? 'order-2' : 'order-none'"
        class="grow shrink basis-[40%] md:grow-0 md:basis-auto lg:grow"
      >
        <ul class="flex gap-2 md:gap-4 justify-end">
          <li>
            <a :tabindex="md ? 2 : 4" href="/cart"
              ><img class="w-8" src="/icons/cart.svg" alt="Shopping Cart" /><span
                class="hidden self-center lg:block"
                >cart</span
              ></a
            >
          </li>
          <li>
            <a :tabindex="md ? 3 : 5" href="/account"
              ><img class="w-8" src="/icons/user.svg" alt="Account" /><span
                class="hidden self-center lg:block"
                >account</span
              ></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const md = computed(() => breakpoints.smaller('md').value);
</script>

<style scoped>
.search-wrapper {
  @apply md:max-w-xl px-1 flex justify-between;
}

ul li a {
  @apply flex gap-2;
}
</style>

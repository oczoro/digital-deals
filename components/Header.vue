<template>
  <header class="py-4 md:py-6 | border-b-gray-300 border-b">
    <nav class="r-mx | flex flex-wrap gap-y-2 md:gap-x-6 lg:gap-x-0 items-center">
      <div class="pr-2 order-3 md:order-none lg:hidden">
        <button class="w-8 align-middle" :tabindex="md ? 1 : 4">
          <img src="/icons/hamburger.png" alt="Menu" />
        </button>
      </div>
      <div
        class="grow shrink basis-[60%] order-1 md:order-none md:basis-auto translate-y-[2px]"
      >
        <div>
          <a :tabindex="md ? 2 : 1" href="/">
            <img src="/img/logo.svg" alt="DigitalDeals" />
          </a>
        </div>
      </div>
      <div class="grow md:grow-0 lg:grow order-4 md:order-none">
        <div :tabindex="md ? 3 : 5" class="search-wrapper gradient-border">
          <input
            class="py-2 grow md:sr-only lg:not-sr-only focus:outline-none"
            type="search"
            placeholder="Search for digital products..."
          />
          <button class="md:p-2"><img src="/icons/search.svg" alt="Search" /></button>
        </div>
      </div>
      <div
        class="grow shrink basis-[40%] order-2 md:order-none md:grow-0 md:basis-auto lg:grow"
      >
        <ul class="flex gap-2 md:gap-4 justify-end">
          <li>
            <a :tabindex="md ? 4 : 2" href="/cart"
              ><img class="w-8" src="/icons/cart.svg" alt="Shopping Cart" /><span
                class="hidden self-center lg:block"
                >cart</span
              ></a
            >
          </li>
          <li>
            <a :tabindex="md ? 5 : 3" href="/account"
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
const md = computed(() => breakpoints.greaterOrEqual('md'));
</script>

<style scoped>
.search-wrapper {
  @apply md:max-w-xl px-1 flex justify-between;
}

ul li a {
  @apply flex gap-2;
}
</style>

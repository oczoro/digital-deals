<template>
  <header class="py-4 md:py-6 | border-b-gray-300 border-b">
    <nav
      class="r-mx relative | flex flex-wrap gap-y-2 md:gap-x-6 lg:gap-x-0 items-center"
    >
      <div class="pr-2 order-3 md:order-none lg:hidden">
        <button
          @click="menu_toggled = !menu_toggled"
          class="w-8 align-middle"
          :tabindex="isDesktop ? -1 : isTablet ? 1 : 4"
        >
          <img src="/icons/hamburger.png" alt="Menu" />
        </button>
      </div>
      <div
        class="grow shrink basis-[60%] order-1 md:order-none md:basis-auto translate-y-[2px]"
      >
        <div>
          <router-link :tabindex="isDesktop ? 1 : isTablet ? 2 : 1" to="/">
            <img src="/img/logo.svg" alt="DigitalDeals" />
          </router-link>
        </div>
      </div>
      <div class="grow md:grow-0 lg:grow order-4 md:order-none">
        <div class="search-wrapper gradient-border">
          <input
            :tabindex="isDesktop ? 2 : isTablet ? 3 : 5"
            class="py-2 grow md:sr-only lg:not-sr-only focus:outline-none"
            type="search"
            placeholder="Search for digital products..."
          />
          <button :tabindex="isDesktop ? 3 : isTablet ? 4 : 6" class="md:p-2">
            <img src="/icons/search.svg" alt="Search" />
          </button>
        </div>
      </div>
      <div
        class="grow shrink basis-[40%] order-2 md:order-none md:grow-0 md:basis-auto lg:grow"
      >
        <ul class="flex gap-2 md:gap-4 justify-end">
          <li>
            <router-link :tabindex="isDesktop ? 4 : isTablet ? 5 : 2" to="/cart"
              ><img class="w-8" src="/icons/cart.svg" alt="Shopping Cart" /><span
                class="hidden self-center lg:block"
                >cart</span
              ></router-link
            >
          </li>
          <li>
            <router-link
              :tabindex="isDesktop ? 5 : isTablet ? 6 : 3"
              :to="loggedIn ? '/account' : '/login'"
              ><img class="w-8" src="/icons/user.svg" alt="Account" /><span
                class="hidden self-center lg:block"
                >account</span
              ></router-link
            >
          </li>
        </ul>
      </div>
      <div
        :class="
          menu_toggled
            ? 'translate-x-0 opacity-100 backdrop-opacity-90 backdrop-blur-md'
            : '-translate-x-full opacity-0'
        "
        class="fixed inset-0 z-50 | text-white bg-ocean-default/90 transition-all duration-150 ease-in"
      >
        <button
          class="absolute top-4 right-4 md:top-8 md:right-8 hover:brightness-125"
          @click="menu_toggled = !menu_toggled"
        >
          <img src="/icons/close.svg" alt="Close" /><span class="sr-only">Close</span>
        </button>
        <ul class="h-full p-8 md:px-32 | flex flex-col justify-center gap-2">
          <li
            class="p-1 hover:-translate-y-1 hover:brightness-125 transition-all duration-75 ease-out"
            v-for="(category, index) in categories"
            :key="index"
          >
            <router-link
              class="text-2xl font-bold gradient-text drop-shadow"
              :tabindex="menu_toggled ? 0 : -1"
              @click="menu_toggled = !menu_toggled"
              :to="`/products/${category}`"
              >{{ category }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { isLoggedIn } from '@/data/auth';

const loggedIn = ref(isLoggedIn());
const categories = getCategories();

const breakpoints = useBreakpoints(breakpointsTailwind);
const isTablet = breakpoints.greaterOrEqual('md');
const isDesktop = breakpoints.greaterOrEqual('lg');

const menu_toggled = ref(false);
</script>

<style scoped>
.search-wrapper {
  @apply md:max-w-xl px-1 flex justify-between;
}

ul li a {
  @apply flex gap-2;
}
</style>

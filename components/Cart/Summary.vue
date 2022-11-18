<template>
  <div class="p-2 md:p-6 | text-base md:text-xl gradient-border-rnone rounded-2xl">
    <h2 class="text-xl md:text-5xl font-bold">Summary</h2>
    <ul class="mt-2 md:mt-4">
      <li class="flex justify-between" v-for="product in cart">
        <p class="text-ellipsis overflow-hidden whitespace-nowrap">
          {{ product.name }}
        </p>
        <div class="shrink max-w-[100px] md:max-w-[120px] w-full flex justify-between">
          <p>x{{ product.amount }}</p>
          <p>${{ product.amount * product.price }}</p>
        </div>
      </li>
    </ul>
    <div class="mt-3">
      <div class="flex justify-between">
        <p class="">Tax</p>
        <p>${{ 99.99 }}</p>
      </div>
      <div class="flex justify-between">
        <p class="">Subtotal</p>
        <p>${{ 99.99 }}</p>
      </div>
    </div>
    <div class="mt-3 | flex justify-between">
      <p class="text-xl font-bold">Total</p>
      <p>${{ 99.99 }}</p>
    </div>
    <div class="flex md:justify-end">
      <button
        class="w-full md:w-fit mt-3 py-2 md:py-4 md:px-12 | text-xl font-bold text-white bg-aqua rounded-md"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cart: Array,
});
</script>

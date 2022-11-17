<template>
  <div class="p-2 | gradient-border-rnone rounded-2xl">
    <ul>
      <li class="flex justify-between" v-for="product in cart">
        <p class="grow font-bold">{{ product.name }}</p>
        <div class="grow flex justify-between">
          <p>x{{ product.amount }}</p>
          <p>${{ product.amount * product.price }}</p>
        </div>
      </li>
    </ul>
    <div class="mt-3">
      <div class="flex justify-between">
        <p class="font-bold">Tax</p>
        <p>${{ 99.99 }}</p>
      </div>
      <div class="flex justify-between">
        <p class="font-bold">Subtotal</p>
        <p>${{ 99.99 }}</p>
      </div>
    </div>
    <div class="mt-3 | flex justify-between">
      <p class="text-xl font-bold">Total</p>
      <p>${{ 99.99 }}</p>
    </div>
    <button class="w-full mt-3 py-4 | text-xl font-bold text-white bg-aqua rounded-md">
      Checkout
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  cart: Array,
});
</script>

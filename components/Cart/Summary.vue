<template>
  <div class="p-2 w-full | text-base md:text-xl gradient-border-rnone rounded-2xl">
    <h2 class="text-xl md:text-2xl font-bold">Summary</h2>
    <ul class="mt-2 md:mt-4">
      <li class="flex justify-between" v-for="product in cart">
        <p class="text-ellipsis overflow-hidden whitespace-nowrap">
          {{ product.name }}
        </p>
        <div
          class="shrink max-w-[100px] md:max-w-[120px] lg:max-w-[200px] w-full flex justify-between"
        >
          <p>x{{ product.amount }}</p>
          <p>
            ${{
              (
                product.amount * getDiscountPrice(product.price, product.discount)
              ).toFixed(2)
            }}
          </p>
        </div>
      </li>
    </ul>
    <div class="mt-3">
      <div class="flex justify-between">
        <p class="">Subtotal</p>
        <p>${{ getCartSubTotal().value.toFixed(2) }}</p>
      </div>
      <div class="flex justify-between">
        <p class="">Tax</p>
        <p>${{ getTax().value.toFixed(2) }}</p>
      </div>
    </div>
    <div class="mt-3 | flex justify-between">
      <p class="text-xl font-bold">Total</p>
      <p>${{ getCartTotal().value.toFixed(2) }}</p>
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
const cart = getCart();
</script>

<template>
  <section class="min-h-[500px]">
    <div class="r-mx r-mt r-mb">
      <h2 class="text-2xl md:text-4xl font-bold">Checkout</h2>
      <div
        v-if="cart.length != 0"
        class="mt-4 | flex flex-col sm:flex-row gap-4 sm:gap-2"
      >
        <CartSummary />
        <CartList />
      </div>
      <div v-else>
        <h2 class="mt-4 text-xl md:text-2xl">No products in your cart! 😢</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
const cart = getCart();
</script>

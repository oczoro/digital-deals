<template>
  <section>
    <div class="r-mx r-mt r-mb">
      <h2 class="text-2xl md:text-6xl font-bold">Checkout</h2>
      <div v-if="cart.length != 0">
        <CartSummary class="r-mt" :cart="cart" />
        <CartList class="mt-4" :cart="cart" />
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

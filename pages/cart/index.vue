<template>
  <section>
    <div class="r-mx r-mt">
      <h2 class="text-2xl font-bold">Checkout</h2>
      <CartSummary class="mt-4" :cart="cart" />
      <CartList class="mt-4" :cart="cart" />
    </div>
  </section>
</template>

<script setup>
// TODO: CHANGE TO ACTUAL CART DATA
const products = getProducts();
const cart = products.slice(6);
</script>

<template>
  <section class="min-h-[500px]">
    <div>
      <ProductDetails :product="product" :routes="routes" />
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const product = getProduct(parseInt(route.params.id));
const routes = ref([
  { route: '/', name: 'Home' },
  {
    route: `/${product.value.id}`,
    name: product.value.name,
  },
]);
</script>

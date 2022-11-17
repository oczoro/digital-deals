<template>
  <div>
    <ProductDetails :product="product" :routes="routes" />
  </div>
</template>

<script setup>
const route = useRoute();
const product = getProduct(parseInt(route.params.id));
const routes = ref([
  { route: '/', name: 'Home' },
  { route: `/products/${route.params.category}`, name: `${route.params.category}` },
  {
    route: `/products/${route.params.category}/${product.id}`,
    name: product.name,
  },
]);
</script>

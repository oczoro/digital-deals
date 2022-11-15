<template>
  <div>
    <Breadcrumbs class="r-mx mt-4" :routes="routes" />
    <ProductCatalog
      class="r-mx"
      title="All - Products"
      category="products"
      :products="products"
    />
    <PageNav />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = getProducts();
const routes = ref([
  { route: '/', name: 'Home' },
  { route: '/products', name: 'All' },
]);
</script>

<template>
  <section class="r-mt r-mb">
    <Breadcrumbs class="r-mx" :routes="routes" />
    <ProductCatalog
      class="r-mx"
      title="All - Products"
      category="products"
      :products="products"
    />
    <!-- <PageNav /> -->
  </section>
</template>

<script setup>
import { ref } from 'vue';

const products = getProducts();
const routes = ref([
  { route: '/', name: 'Home' },
  { route: '/products', name: 'All' },
]);
</script>

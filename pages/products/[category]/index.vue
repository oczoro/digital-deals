<template>
  <div>
    <Breadcrumbs class="r-mx mt-4" :routes="routes" />
    <ProductCatalog
      class="r-mx"
      title="All - Products"
      :category="$route.params.category"
      :products="products"
    />
    <PageNav />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const products = getProducts();
const routes = ref([
  { route: '/', name: 'Home' },
  { route: `/products/${route.params.category}`, name: route.params.category },
]);
</script>

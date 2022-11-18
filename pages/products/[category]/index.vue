<template>
  <section class="min-h-[500px] r-mt r-mb">
    <Breadcrumbs class="r-mx mt-4" :routes="routes" />
    <ProductCatalog
      class="r-mx"
      :title="$route.params.category"
      :category="$route.params.category"
      :products="products"
    />
    <!-- <PageNav /> -->
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const products = getProductsInCategory(route.params.category);
const routes = ref([
  { route: '/', name: 'Home' },
  { route: `/products/${route.params.category}`, name: route.params.category },
]);
</script>

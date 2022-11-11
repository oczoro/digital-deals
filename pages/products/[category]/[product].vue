<template>
  <div>
    <Breadcrumbs class="r-mx mt-4" :routes="routes" />
    <section>
      <h1 class="text-2xl font-bold">{{ $route.params.product }}</h1>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const routes = ref([
  { route: '/', name: 'Home' },
  { route: `/${route.params.category}`, name: `${route.params.category}` },
  {
    route: `/${route.params.category}/${route.params.product}`,
    name: route.params.product,
  },
]);
</script>

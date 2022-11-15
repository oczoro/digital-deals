<template>
  <section>
    <div class="r-mx | flex justify-between">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <button class="px-4 py-1 | text-neutral | bg-aqua rounded-md">View All</button>
    </div>
    <div class="r-pl pt-8 pb-8 | flex gap-4 | overflow-x-scroll hidden-scroll">
      <div v-for="(product, index) in products" :key="index">
        <router-link :to="`/products/${product.id}`">
          <ProductCard :product="product" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  products: Array,
});
</script>

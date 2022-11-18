<template>
  <section>
    <div class="r-mx | flex justify-between items-center">
      <h1 class="text-2xl md:text-5xl font-bold">{{ title }}</h1>
      <router-link
        :to="`/products/${title}`"
        class="h-fit px-4 py-1 | text-neutral | bg-aqua rounded-md"
      >
        View All
      </router-link>
    </div>
    <div
      class="r-pl r-pr pt-8 pb-8 | flex gap-4 md:gap-8 | overflow-x-scroll hidden-scroll"
    >
      <div v-for="(product, index) in products" :key="index">
        <router-link :to="`/product/${product.id}`">
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

<template>
  <section>
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <div class="controls | mt-4 | flex justify-between gap-2">
      <button><img src="/icons/hamburger-grey.svg" alt="Change to List View" /></button>
      <button><img src="/icons/waffle.svg" alt="Change to Grid View" /></button>
      <select class="grow | px-1 py-1 | bg-white gradient-border" name="product-sort">
        <option value="best-match">Best Match</option>
        <option value="low-high">Price - Low to High</option>
        <option value="high-low">Price - High to Low</option>
      </select>
    </div>
    <div class="products | mt-6 | grid grid-cols-2 gap-1">
      <ProductCardalog
        v-for="(product, index) in products"
        :key="index"
        :category="category"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  category: String,
  products: Array,
});
</script>

<template>
  <section>
    <div>
      <div class="flex flex-col mt-2 md:mt-4 md:flex-row justify-between">
        <h1 class="text-2xl md:text-4xl font-bold">{{ title }}</h1>
        <div
          class="controls grow | mt-2 md:mt-0 flex justify-start md:justify-end gap-2 md:gap-4"
        >
          <button>
            <img src="/icons/hamburger-grey.svg" alt="Change to List View" />
          </button>
          <button><img src="/icons/waffle.svg" alt="Change to Grid View" /></button>
          <select
            class="w-0 max-w-[250px] grow | p-1 md:p-2 | bg-white gradient-border"
            name="product-sort"
          >
            <option value="best-match">Best Match</option>
            <option value="low-high">Price - Low to High</option>
            <option value="high-low">Price - High to Low</option>
          </select>
        </div>
      </div>
      <div class="products | mt-6 | grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
        <ProductCardalog
          v-for="(product, index) in products"
          :key="index"
          :category="category"
          :product="product"
        />
      </div>
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

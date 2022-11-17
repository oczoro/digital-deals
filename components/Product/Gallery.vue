<template>
  <div class="block lg:hidden">
    <div
      class="r-ml lg:ml-0 | relative | lg:w-full lg:max-w-[528px] lg:shrink h-24 md:h-28 lg:h-auto overflow-x-scroll hidden-scroll lg:overflow-auto"
    >
      <div
        class="r-pr lg:pr-0 | absolute lg:relative top-3 md:top-4 lg:top-0 lg:max-h-[400px] | flex gap-2 md:gap-6 lg:gap-0 lg:flex-wrap"
      >
        <div
          class="w-16 md:w-20 lg:max-w-[254px] lg:grow lg:shrink lg:basis-[50%] aspect-square"
          v-for="product in products"
          :key="product.id"
        >
          <img
            class="w-full h-full drop-shadow rounded-lg object-cover"
            :src="`/img/products/${product.img}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="hidden lg:block max-h-[250px] w-16 md:w-20 lg:w-full lg:col-span-2"
    v-for="product in products.slice(2, products.length - 1)"
    :key="product.id"
  >
    <img
      class="w-full h-full drop-shadow rounded-lg object-cover"
      :src="`/img/products/${product.img}`"
      alt=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>

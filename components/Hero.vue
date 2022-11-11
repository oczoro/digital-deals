<template>
  <section class="mt-8 lg:mx-36 | lg:grid lg:grid-cols-12 lg:grid-rows-3 lg:gap-5">
    <ProductNav class="hidden lg:block lg:col-span-2 lg:row-span-full" />
    <ProductGalleryMain id="productgallery-main" :product="products[7]" />
    <ProductGallery id="productgallery-secondary" :products="products" />
  </section>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>

<style scoped>
#productgallery-main {
  @apply mdlg:col-span-12 mdlg:row-start-2 mdlg:row-span-2;
  @apply lg:col-span-6 lg:row-span-full;
}
</style>

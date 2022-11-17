<template>
  <section class="relative bg-transparent">
    <div class="r-mt lg:mx-36 | lg:grid lg:grid-cols-12 lg:grid-rows-3 lg:gap-5">
      <ProductNav class="hidden lg:block lg:col-span-3 lg:row-span-full xlg:col-span-2" />
      <ProductGalleryMain class="productgallery-main" :product="products[7]" />
      <!-- <ProductGallery id="productgallery-secondary" :products="products" /> -->
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  products: Array,
});
</script>

<style scoped>
.productgallery-main {
  @apply mdlg:col-span-12 mdlg:row-start-2 mdlg:row-span-2;
  @apply lg:col-span-9 lg:row-span-full;
  @apply xlg:col-span-10;
}

@media (min-width: 768px) {
  section::before {
    content: '';
    background-image: url('/img/shape-1.svg');
    position: absolute;
    z-index: -1;
    top: -280px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 1200px;
  }
}
</style>

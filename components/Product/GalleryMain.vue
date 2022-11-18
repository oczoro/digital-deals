<template>
  <div class="relative | w-full h-80 md:h-[550px] lg:h-[700px] lg:grow">
    <div
      class="absolute inset-0 | lg:rounded-xl | bg-gradient-to-b from-black to-transparent opacity-80"
    ></div>
    <h1
      class="absolute top-4 ml-2 md:ml-10 lg:ml-4 | w-[14ch] text-3xl md:text-6xl text-neutral uppercase"
    >
      Digital Items <span class="text-4xl md:text-7xl font-extrabold">Discounted</span>
    </h1>
    <img
      class="h-full w-full lg:rounded-xl object-cover"
      :src="`/img/products/${product.img}`"
      :alt="product.alt"
    />
    <router-link
      to="/products/Deals"
      class="absolute bottom-4 ml-2 md:ml-10 lg:ml-4 | p-4 md:p-6 border-2 border-neutral text-2xl md:text-3xl text-neutral uppercase rounded-3xl"
    >
      See Deals
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>

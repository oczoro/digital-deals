<template>
  <div
    class="card | w-48 h-full | flex flex-col | shadow-card rounded-t-3xl rounded-b-3xl hover:scale-105 transition duration-200 ease-in"
  >
    <div class="card-image">
      <img
        class="w-full h-40 md:h-44 | rounded-t-3xl object-cover"
        :src="`/img/products/${product.img}`"
        :alt="product.alt"
      />
    </div>
    <div class="card-content | grow px-2 py-2 | flex flex-col gap-3 justify-between">
      <div>
        <h2 class="card-title | leading-4 text-base font-bold">{{ product.name }}</h2>
        <p class="card-subtitle | mt-1 | leading-4">{{ product.subtitle }}</p>
      </div>
      <div class="card-price | flex justify-between">
        <p class="text-sm line-through">${{ product.price }}</p>
        <p class="font-bold">${{ getDiscountPrice(product.price, product.discount) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});

const getDiscountPrice = (price, discount) => {
  const amount = price - (price * discount) / 100;
  return amount.toFixed(2);
};
</script>

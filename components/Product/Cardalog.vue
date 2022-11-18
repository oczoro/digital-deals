<template>
  <router-link
    :to="`/products/${category}/${product.id}`"
    class="card | min-h-[220px] h-full | flex flex-col | gradient-border !rounded-xl"
  >
    <div class="card-image">
      <img
        class="w-full h-28 md:h-36 | rounded-t-xl object-cover"
        :src="`/img/products/${product.img}`"
        :alt="product.alt"
      />
    </div>
    <div class="card-content | grow p-1 md:p-2 | flex flex-col gap-3 justify-between">
      <div>
        <h2
          class="card-title | leading-4 text-sm md:text-base md:tracking-tight font-bold"
        >
          {{ product.name }}
        </h2>
        <p class="card-subtitle | mt-1 | text-xs md:text-sm leading-4">
          {{ product.subtitle }}
        </p>
      </div>
      <div
        class="card-price | flex justify-between md:justify-start gap-2 items-baseline"
      >
        <p class="text-sm md:text-base font-bold">
          ${{ getDiscountPrice(product.price, product.discount) }}
        </p>
        <p class="text-xs md:text-sm line-through">${{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  category: String,
  product: Object,
});

const getDiscountPrice = (price, discount) => {
  const amount = price - (price * discount) / 100;
  return amount.toFixed(2);
};
</script>

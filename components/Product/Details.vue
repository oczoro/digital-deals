<template>
  <section class="relative">
    <div class="r-mx py-4">
      <Breadcrumbs :routes="routes" />
      <div class="mt-4">
        <img
          class="rounded-2xl shadow"
          :src="`/img/products/${product.img}`"
          :alt="product.alt"
        />
      </div>
      <div class="mt-4 p-4 | flex flex-col gap-4 | gradient-border rounded-xl">
        <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        <p class="">{{ product.description }}</p>
        <div class="flex items-center gap-8 justify-between">
          <p class="font-bold">Amount</p>
          <select class="py-2 | grow | gradient-border" name="amount-dropdown" id="">
            <option v-for="amount in 5" value="productAmount">
              {{ amount }}
            </option>
          </select>
        </div>
        <div class="flex justify-between">
          <p>{{ product.price }}</p>
          <p>{{ getDiscountPrice(product.price, product.discount) }}</p>
        </div>
        <button
          @click="addCartProduct(product)"
          class="text-white uppercase | bg-aqua py-4 rounded"
        >
          Add to cart
        </button>
        <button
          @click="checkout(product)"
          class="text-white uppercase | bg-ocean-grey py-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  product: Object,
  routes: Array,
});

const router = useRouter();

function checkout(product) {
  addCartProduct(product);
  router.push('/checkout');
}
</script>

<style scoped>
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

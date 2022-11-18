<template>
  <section class="relative">
    <div class="r-mx r-mb py-4">
      <Breadcrumbs :routes="routes" />
      <div class="mt-4 | flex flex-col md:flex-row gap-4">
        <div class="grow shrink basis-1/2 md:aspect-square lg:aspect-auto">
          <img
            class="w-full h-full object-cover rounded-2xl shadow"
            :src="`/img/products/${product.img}`"
            :alt="product.alt"
          />
        </div>
        <div
          class="grow basis-1/2 p-4 md:p-8 | flex flex-col gap-4 md:gap-8 | gradient-border-rnone rounded-2xl"
        >
          <h1 class="text-2xl md:text-5xl font-bold">{{ product.name }}</h1>
          <p class="text-xl">{{ product.subtitle }}</p>
          <p class="text-xl">{{ product.description }}</p>
          <div class="mt-4 | flex flex-col gap-4 md:gap-8">
            <div class="grow | flex items-center gap-8 justify-start">
              <p class="md:text-xl font-bold">Amount</p>
              <select
                class="py-2 px-1 | grow max-w-[225px] | gradient-border"
                name="amount-dropdown"
                v-model="selectedAmount"
              >
                <option disabled value="-1">Please select one</option>
                <option v-for="amount in product.stock">
                  {{ amount }}
                </option>
              </select>
            </div>
            <div class="grow | flex gap-4 justify-start items-center">
              <p class="text-lg md:text-4xl font-bold">
                ${{ getDiscountPrice(product.price, product.discount).toFixed(2) }}
              </p>
              <p class="text-sm md:text-xl line-through">${{ product.price }}</p>
            </div>
          </div>
          <div class="mt-4 | flex flex-col mdlg:flex-row gap-4">
            <button
              @click="addToCart(product)"
              class="grow text-white uppercase | bg-aqua py-4 rounded hover:shadow-md hover:brightness-110 transition duration-200 ease-in"
            >
              Add to cart
            </button>
            <button
              @click="checkout(product)"
              class="grow text-white uppercase | bg-ocean-grey py-4 rounded hover:shadow-md hover:brightness-110 transition duration-200 ease-in"
            >
              Checkout
            </button>
          </div>
        </div>
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

console.log(props.routes);

const router = useRouter();

const selectedAmount = ref(1);

function addToCart(product) {
  product.amount = selectedAmount.value;
  addCartProduct(product);
  alert('Added product to your cart!');
}

function checkout(product) {
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

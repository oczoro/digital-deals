<template>
  <div class="gradient-border-rnone rounded-2xl">
    <ul>
      <li class="p-2 flex gap-2" v-for="product in cart">
        <div>
          <img
            class="w-16 aspect-square rounded-xl object-cover"
            :src="`/img/products/${product.img}`"
            :alt="`/img/products/${product.alt}`"
          />
        </div>
        <div class="grow">
          <div class="flex justify-between">
            <p class="font-bold">{{ product.name }}</p>
          </div>
          <div class="mt-2 flex justify-between">
            <select class="w-16 px-1 gradient-border" name="amount-dropdown">
              <option v-for="amount in 5" value="productAmount">
                {{ amount }}
              </option>
            </select>
            <p>${{ product.price }}</p>
            <button>
              <img src="/icons/trash.svg" alt="Delete" /><span class="sr-only"
                >Delete</span
              >
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  cart: Array,
});
</script>

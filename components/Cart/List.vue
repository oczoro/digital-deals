<template>
  <div class="p-2 w-full | gradient-border-rnone rounded-2xl">
    <h2 class="text-xl md:text-2xl font-bold">Cart</h2>
    <ul>
      <li class="mt-4 | flex gap-2" v-for="product in cart">
        <div class="w-[92px] h-[92px]">
          <img
            class="w-full h-full rounded-xl object-cover"
            :src="`/img/products/${product.img}`"
            :alt="`/img/products/${product.alt}`"
          />
        </div>
        <div class="shrink">
          <p class="font-bold">{{ product.name }}</p>
          <p class="text-ellipsis overflow-hidden whitespace-nowrap">
            {{ product.subtitle }}
          </p>
          <div class="mt-2 max-w-[200px] flex justify-between">
            <select
              class="w-16 px-1 gradient-border"
              name="amount-dropdown"
              v-model="product.amount"
            >
              <option disabled value="">Please select one</option>
              <option v-for="amount in product.stock">
                {{ amount }}
              </option>
            </select>
            <p>
              ${{
                (
                  product.amount * getDiscountPrice(product.price, product.discount)
                ).toFixed(2)
              }}
            </p>
            <button @click="removeCartProduct(product)">
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
const cart = getCart();
</script>

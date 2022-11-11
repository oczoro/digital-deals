<template>
  <nav>
    <div class="btn bg-ocean-default text-neutral">Categories</div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <a class="mt-2 btn gradient-border" :href="`/products/${category}`">{{ category }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const categories = ref([
  'all',
  'video games',
  'software',
  'gift cards',
  'top-up cards',
  'subscriptions',
  'bestsellers',
  'deals',
]);
</script>

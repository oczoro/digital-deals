<template>
  <nav>
    <div class="btn bg-ocean-default text-neutral">Categories</div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <router-link
          :to="`/products/${category}`"
          class="mt-3 btn gradient-border hover:-translate-y-1 transition-all duration-75 ease-in"
          >{{ category }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const categories = getCategories();
</script>

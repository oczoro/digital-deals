<template>
  <div class="r-mt r-mb | flex justify-center items-center gap-2">
    <button class="px-2 py-1 | flex | text-white bg-ocean-light rounded">
      <img src="/icons/chevron-white-left.svg" alt="Previous Page" />Prev
    </button>
    <div class="page-container | flex gap-2">
      <div class="page" v-for="(page, index) in pages" :key="page">
        <span :class="currentPage == page ? 'font-bold' : ''">{{ page }}</span>
      </div>
    </div>
    <button class="px-2 py-1 | flex | text-white bg-ocean-light rounded">
      Next<img src="/icons/chevron-white-right.svg" alt="Next Page" />
    </button>
  </div>
</template>

<script setup>
const pages = ref([1, 2, 3, 4, 5, 6, 7]);
const currentPage = ref(null);
</script>

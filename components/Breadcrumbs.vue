<template>
  <div class="breadcrumb-wrapper | flex gap-3">
    <div class="flex gap-3 items-center" v-for="(route, index) in routes" :key="index">
      <router-link class="text-sm text-ocean-light" :to="route.route">
        {{ route.name }}
      </router-link>
      <div v-if="index < routes.length - 1">
        <img src="/icons/chevron-right.svg" alt="Arrow pointing right" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  routes: Array,
});
</script>

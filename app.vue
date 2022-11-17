<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '@/assets/css/main.css';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-in;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.125rem);
}
</style>

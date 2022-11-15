<template>
  <div>
    <div class="card-container | px-4 py-8 bg-white rounded-xl">
      <div class="card-content | flex flex-col gap-6 justify-center items-center">
        <div class="flex flex-col gap-6 justify-center items-center">
          <h1 class="text-4xl font-bold">{{ title }}</h1>
          <slot name="fields"></slot>
          <button class="w-full px-6 py-2 | uppercase gradient-border-3">
            <span
              class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-stop to-purp-stop"
              >{{ submitName }}</span
            >
          </button>
        </div>
        <slot name="secondary-links"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  submitName: String,
});
</script>

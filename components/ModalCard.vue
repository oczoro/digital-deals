<template>
  <section>
    <div
      class="card-container | max-w-sm mx-auto r-mt r-mb px-4 py-8 bg-white rounded-xl"
    >
      <div class="card-content | flex flex-col gap-6 justify-center items-center">
        <div class="flex flex-col gap-6 justify-center items-center">
          <h1 class="text-4xl font-bold">{{ title }}</h1>
          <slot name="fields"></slot>
          <button class="w-full px-6 py-2 | uppercase gradient-border-3">
            <span class="gradient-text">{{ submitName }}</span>
          </button>
        </div>
        <slot name="secondary-links"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  submitName: String,
});
</script>

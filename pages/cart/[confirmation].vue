<template>
  <section class="min-h-[500px]">
    <div class="relative | r-mx r-mt r-mb p-4 | gradient-border-rnone rounded-2xl">
      <button class="absolute top-4 right-4">
        <img src="/icons/close-grey.svg" alt="Close" /><span class="sr-only">Close</span>
      </button>
      <div class="flex gap-2">
        <img src="/icons/check.svg" alt="Confirmation" />
        <h1 class="text-4xl font-bold">Complete!</h1>
      </div>
      <p class="mt-4">
        Your order was successfully placed. This is a confirmation page to show your
        transaction was successful.
      </p>
      <p class="mt-4">
        You will recieve an email with further instructions on how to claim your items.
      </p>
      <p class="mt-4 font-bold">Transaction ID: {{ $route.params.confirmation }}</p>
      <button class="w-full mt-4 | gradient-border-3 p-2">
        <span class="gradient-text">Continue to digital deals</span>
      </button>
    </div>
  </section>
</template>

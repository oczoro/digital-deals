<template>
  <section class="min-h-[500px] bg-gradient-to-br from-cyan-stop to-purp-stop">
    <ModalCard class="r-mx py-2" title="Register" submitName="Register">
      <template #fields>
        <div class="w-full p-2 | flex gap-2 | gradient-border-b">
          <img class="w-min" src="/icons/email.svg" alt="Email" />
          <input class="w-full px-1 focus:outline-none" type="text" placeholder="Email" />
        </div>
        <div class="w-full p-2 | flex gap-2 | gradient-border-b">
          <img class="w-min" src="/icons/lock.svg" alt="Password" />
          <input
            class="w-full px-1 focus:outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="w-full p-2 | flex gap-2 | gradient-border-b">
          <img class="w-min" src="/icons/lock.svg" alt="Confirm Password" />
          <input
            class="w-full px-1 focus:outline-none"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
      </template>
      <template #secondary-links>
        <router-link class="text-sm" to="/login"
          >Already have an account?
          <span class="border-b border-b-ocean-default">Login here</span></router-link
        >
      </template>
    </ModalCard>
  </section>
</template>

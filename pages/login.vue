<template>
  <section class="min-h-[500px] bg-gradient-to-br from-cyan-stop to-purp-stop">
    <ModalCard class="r-mx py-2" title="Login" submitName="Login">
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
        <div class="w-full flex gap-2">
          <input id="login-remember" class="text-ocean-default" type="checkbox" />
          <label for="login-remember">Remember my password</label>
        </div>
      </template>
      <template #secondary-links>
        <router-link class="text-sm" to="/register"
          >Don't have an account?
          <span class="border-b border-b-ocean-default">Register here</span></router-link
        >
      </template>
    </ModalCard>
  </section>
</template>

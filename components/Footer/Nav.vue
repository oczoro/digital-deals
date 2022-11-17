<template>
  <nav>
    <ul class="pt-6 | flex flex-wrap gap-y-2">
      <li class="nav-item"><router-link to="/">Home</router-link></li>
      <li class="nav-item">
        <router-link to="/products">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/account">Account</router-link>
      </li>
      <li class="nav-item"><router-link to="/cart">Cart</router-link></li>
      <li class="nav-item">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-item {
  @apply grow shrink basis-1/3 max-w-[33.333333%] md:max-w-none md:basis-0 font-bold;
}

.nav-item ul {
  @apply text-sm font-normal;
}
</style>

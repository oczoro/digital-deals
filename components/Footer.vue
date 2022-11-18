<template>
  <footer class="r-pt | bg-ocean-default text-white">
    <div class="footer-wrapper | r-mx | grid grid-cols-1 md:grid-cols-2">
      <FooterNav class="col-span-full lg:col-span-1" />
      <FooterNewsletter class="col-span-full lg:row-start-1 lg:col-span-1" />
      <div
        class="socials | col-span-full md:col-span-1 | mt-8 | flex justify-center md:justify-start gap-4"
      >
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/icons/linkedin.svg" alt="Linkedin" /></a>
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
      </div>
      <router-link class="footer-logo | col-span-full md:col-span-1 block | mt-8" to="/">
        <img
          class="mx-auto md:ml-auto md:mr-0"
          src="/img/logo-dark.svg"
          alt="Digital Deals"
        />
      </router-link>
      <div class="payments | col-span-full | mt-8 | flex justify-center gap-2">
        <img class="w-8" src="/icons/paypal.svg" alt="PayPal" />
        <img class="w-8" src="/icons/stripe.svg" alt="Stripe" />
        <img class="w-8" src="/icons/amex.svg" alt="American Express" />
        <img class="w-8" src="/icons/visa.svg" alt="Visa" />
        <img class="w-8" src="/icons/mastercard.svg" alt="Master Card" />
        <img class="w-8" src="/icons/discover.svg" alt="Discover" />
      </div>
      <div class="footer-hr | col-span-full | mt-8"></div>
      <p class="col-span-full | py-4 | text-center text-ocean-light">
        <small>Copyright &copy; 2022 Digital Deals</small>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-hr {
  @apply border-b border-ocean-light;
}
</style>

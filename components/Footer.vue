<template>
  <footer class="bg-ocean-default text-white">
    <div class="footer-wrapper | r-mx">
      <FooterNav />
      <FooterNewsletter />
      <div class="socials | mt-8 | flex justify-center gap-4">
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/icons/linkedin.svg" alt="Linkedin" /></a>
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
      </div>
      <router-link class="footer-logo block | mt-8" to="/">
        <img class="mx-auto" src="/img/logo-dark.svg" alt="Digital Deals" />
      </router-link>
      <div class="payments | mt-8 | flex justify-center gap-2">
        <img class="w-8" src="/icons/paypal.svg" alt="PayPal" />
        <img class="w-8" src="/icons/stripe.svg" alt="Stripe" />
        <img class="w-8" src="/icons/amex.svg" alt="American Express" />
        <img class="w-8" src="/icons/visa.svg" alt="Visa" />
        <img class="w-8" src="/icons/mastercard.svg" alt="Master Card" />
        <img class="w-8" src="/icons/discover.svg" alt="Discover" />
      </div>
      <div class="footer-hr | mt-8"></div>
      <p class="py-4 | text-center text-ocean-light">
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

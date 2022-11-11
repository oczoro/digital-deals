<template>
  <footer class="bg-ocean-default text-white">
    <div class="footer-wrapper | r-mx">
      <FooterNav />
      <FooterNewsletter />
      <div class="socials | flex justify-center gap-4">
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/icons/linkedin.svg" alt="Linkedin" /></a>
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
      </div>
      <div class="footer-logo">
        <img src="/img/logo-dark.svg" alt="Digital Deals" />
      </div>
      <div class="payments"></div>
      <div class="footer-hr"></div>
      <small>Copyright &copy; 2022 Digital Deals</small>
    </div>
  </footer>
</template>

<style scoped>
.footer-hr {
  @apply border-b border-ocean-grey;
}
</style>

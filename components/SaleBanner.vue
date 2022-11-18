<template>
  <section class="relative overflow-hidden">
    <div
      class="banner-wrapper relative | md:h-[624px] r-mt | bg-gradient-to-br from-cyan-stop to-purp-stop"
    >
      <div
        class="banner-title relative z-20 | h-full r-mx py-8 md:py-20 | flex flex-col gap-10 justify-between | lg:text-right uppercase"
      >
        <div class="flex flex-col gap-2">
          <h1
            class="w-[10ch] md:w-full | text-4xl md:text-5xl lg:text-6xl leading-9 md:leading-relaxed text-white drop-shadow-dark"
          >
            Winter 2022 Sale
          </h1>
          <p
            class="text-[2.75em] md:text-[3.125em] lg:text-7xl leading-10 lg:leading-relaxed font-bold text-white drop-shadow-dark"
          >
            99% OFF ALL ITEMS
          </p>
        </div>
        <router-link
          to="/products/Deals"
          class="w-fit py-4 px-6 lg:py-8 lg:px-10 lg:self-end | text-3xl md:text-4xl lg:text-6xl text-white drop-shadow-md | bg-transparent border-4 border-white rounded-full hover:brightness-125 hover:backdrop-blur-sm duration-300 ease-in"
        >
          SEE DEALS
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
section::after {
  content: '';
  background-image: url('/img/salebanner.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  width: 160%;
  z-index: 10;
  inset: 0;
  transform: translate(10%, 50px);
}
@media (min-width: 768px) {
  section::after {
    width: 135%;
    transform: translate(10%, 50px);
  }
}
@media (min-width: 1080px) {
  section::after {
    transform: translate(-30%, 50px);
  }
}
</style>

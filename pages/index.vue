<template>
  <div>
    <Html>
      <Head>
        <Title>Digital Deals</Title>
      </Head>
    </Html>
    <div>
      <Hero :products="products" />
      <ProductShowcase class="r-mt" title="Featured" :products="products" />
      <SaleBanner class="r-mt" />
      <ProductShowcase class="r-mt" title="Trending" :products="products" />
    </div>
  </div>
</template>

<script setup>
const products = getProducts();
</script>

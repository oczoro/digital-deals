<template>
  <div>
    <Html>
      <Head>
        <Title>Digital Deals</Title>
      </Head>
    </Html>
    <section class="min-h-[500px]">
      <Hero :products="products" />
      <ProductShowcase class="r-mt" title="Featured" :products="featured" />
      <SaleBanner class="r-mt" />
      <ProductShowcase class="r-mt r-mb" title="Trending" :products="trending" />
    </section>
  </div>
</template>

<script setup>
const products = getProducts();
const featured = getProductsInCategory('Featured');
const trending = getProductsInCategory('Trending');
</script>

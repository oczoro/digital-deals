import { ref } from 'vue';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export const getCategories = () => {
  return ref(categories);
};

export const getProducts = () => {
  return ref(products);
};

export const getProduct = (id: number) => {
  const product = products.find((product) => product.id === id);
  return ref(product);
};

export const getProductsInCategory = (category: string) => {
  let product_list = [];
  for (let product of products) {
    const foundTag = product.tags.find((tag) => tag === category);
    if (foundTag) {
      product_list.push(product);
    }
  }
  return ref(product_list);
};

export const getDiscountPrice = (price: number, discount: number) => {
  const amount = price - (price * discount) / 100;
  return amount;
};

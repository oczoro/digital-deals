import { categories } from '@/data/categories';
import { products } from '@/data/products';

export const getCategories = () => {
  return categories;
};

export const getProducts = () => {
  return products;
};

export const getProduct = (id: number) => {
  return products.find((product) => product.id === id);
};

export const getProductsInCategory = (category: string) => {
  let product_list = [];
  for (let product of products) {
    const foundTag = product.tags.find((tag) => tag === category);
    if (foundTag) {
      product_list.push(product);
    }
  }
  return product_list;
};

export const getDiscountPrice = (price: number, discount: number) => {
  const amount = price - (price * discount) / 100;
  return amount.toFixed(2);
};

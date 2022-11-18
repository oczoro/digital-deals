import { getDiscountPrice } from './products';
import { ref } from 'vue';
import { product } from '@/data/products';

const cart = ref(new Map<number, object>());
const TAX_RATE = 0.06;

export const getCartValues = () => ref(cart.value.values());

export const getCart = () => ref(Array.from(getCartValues().value));

export const getCartProduct = (id: number) => ref(cart.value.get(id));

export const addCartProduct = (product: product) => cart.value.set(product.id, product);

export const removeCartProduct = (product: product) => cart.value.delete(product.id);

export const getCartSubTotal = () => {
  let total = 0;
  Array.from(cart.value.values()).forEach((product: product) => {
    total += product.amount * getDiscountPrice(product.price, product.discount);
  });
  return ref(total);
};

export const getTax = () => ref(getCartSubTotal().value * TAX_RATE);

export const getCartTotal = () => ref(getCartSubTotal().value + getTax().value);

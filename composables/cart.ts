import { ref } from 'vue';
import { product } from '@/data/products';

let cart = new Map<number, object>();

export const getCart = () => ref(Array.from(cart.values()));

export const getCartProduct = (id: number) => ref(cart.get(id));

export const addCartProduct = (product: product) => cart.set(product.id, product);

export const removeCartProduct = (product: product) => cart.delete(product.id);

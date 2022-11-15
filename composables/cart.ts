import { product } from '@/data/products';

let cart = new Map<number, object>();

export const getCart = () => cart;

export const getCartProduct = (id: number) => cart.get(id);

export const addCartProduct = (product: product) => cart.set(product.id, product);

export const removeCartProduct = (product: product) => cart.delete(product.id);

import { categories, category } from './categories';

export type product = {
  id: number;
  tags: category[];
  name: string;
  subtitle: string;
  description: string;
  img: string;
  alt: string;
  price: number;
  discount: number;
  amount?: number;
  stock: number;
};

export const products = [
  {
    id: 0,
    tags: [categories.videogames, categories.deals],
    name: 'Cool Video Game',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '0.jpg',
    alt: 'Alternative Text',
    price: 19.99,
    discount: 42,
    amount: 0,
    stock: 12,
  },
  {
    id: 1,
    tags: [categories.software, categories.bestsellers],
    name: 'Tantalizing Technology',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '1.jpg',
    alt: 'Alternative Text',
    price: 621.99,
    discount: 1,
    amount: 0,
    stock: 1,
  },
  {
    id: 2,
    tags: [categories.subscriptions],
    name: 'Super Cool Subscription',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '2.jpg',
    alt: 'Alternative Text',
    price: 92.99,
    discount: 74,
    amount: 0,
    stock: 12,
  },
  {
    id: 3,
    tags: [categories.videogames],
    name: 'Radical Product',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '3.jpg',
    alt: 'Alternative Text',
    price: 36.99,
    discount: 59,
    amount: 0,
    stock: 7,
  },
  {
    id: 4,
    tags: [categories.topup, categories.deals],
    name: 'Sick Top-Up Card',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '4.jpg',
    alt: 'Alternative Text',
    price: 129.99,
    discount: 24,
    amount: 0,
    stock: 32,
  },
  {
    id: 5,
    tags: [categories.giftcards],
    name: 'Neat Gift Card',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '5.jpg',
    alt: 'Alternative Text',
    price: 159.99,
    discount: 11,
    amount: 0,
    stock: 44,
  },
  {
    id: 6,
    tags: [categories.software],
    name: 'Bodacious Software',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '6.jpg',
    alt: 'Alternative Text',
    price: 8.99,
    discount: 64,
    amount: 0,
    stock: 25,
  },
  {
    id: 7,
    tags: [categories.topup],
    name: 'Nifty Digital Currency',
    subtitle: 'Awesome super cool game',
    description: 'Super cool awesome discounted cool video game product for cheap',
    img: '7.jpg',
    alt: 'Alternative Text',
    price: 299.99,
    discount: 8,
    amount: 0,
    stock: 12,
  },
  {
    id: 8,
    tags: [categories.subscriptions, categories.bestsellers, categories.deals],
    name: 'Sweet Subscription',
    subtitle: 'BigTech 351-Year Service',
    description: 'Best BigTech service around the galagaxy...',
    img: '8.jpg',
    alt: 'Alternative Text',
    price: 448.24,
    discount: 10,
    amount: 0,
    stock: 4,
  },
];
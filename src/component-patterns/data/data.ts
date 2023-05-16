import { Product } from '../interfaces/products';

const product = {
    id: '1',
    title: 'American coffee',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug meme',
    img: './coffee-mug2.png'
}

export const products: Product[] = [product, product2]
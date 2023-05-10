import { createContext } from 'react';
import styles from '../assets/styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Props } from '../interfaces/products';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCardCompound = ({ product, children } : Props) => {
  const { counter, increaseBy } = useProducts();
    
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>

        { children }

      </div>
    </Provider>
  )
}



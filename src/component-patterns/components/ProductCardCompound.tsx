import { ReactElement, createContext } from 'react';
import styles from '../assets/styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { Product, ProductContextProps } from '../interfaces/products';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;


export interface Props {
  product    : Product;
  children?  : ReactElement | ReactElement[]; 
  className? : string,
  customStyles? : React.CSSProperties | undefined;
}

export const ProductCardCompound = ({ product, children, className, customStyles } : Props) => {
  const { counter, increaseBy } = useProducts();
    
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ customStyles } >

        { children }

      </div>
    </Provider>
  )
}



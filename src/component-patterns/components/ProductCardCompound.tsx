import { ReactElement, createContext } from 'react';
import styles from '../assets/styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { Product, ProductCard, ProductContextProps } from '../interfaces/products';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;


export interface Props {
  product    : Product;
  children?  : ReactElement | ReactElement[]; 
  className? : string,
  customStyles? : React.CSSProperties | undefined;
  onChange?: (args : ProductCard ) => void;
  value?: number;
}

export const ProductCardCompound = ({ product, children, className, customStyles, onChange, value } : Props) => {
  const { counter, increaseBy } = useProducts({ onChange, product, value });
    
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ customStyles } >

        { children }

      </div>
    </Provider>
  )
}



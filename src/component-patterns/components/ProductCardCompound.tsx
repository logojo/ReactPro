import { ReactElement, createContext } from 'react';
import styles from '../assets/styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { InitialValue, Product, ProductCard, ProductCardHandlers, ProductContextProps } from '../interfaces/products';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;


export interface Props {
  product        : Product;
  //children?  : ReactElement | ReactElement[];
  children?      : ( args : ProductCardHandlers ) => JSX.Element;
  className?     : string,
  customStyles?  : React.CSSProperties | undefined;
  onChange?      : (args : ProductCard ) => void;
  value?         : number;
  initialValues? : InitialValue;
}

export const ProductCardCompound = ({ product, children, className, customStyles, onChange, value, initialValues } : Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProducts({ onChange, product, value, initialValues });
    
  return (
    <Provider value={{ 
        counter, 
        increaseBy, 
        product, 
        maxCount
    }}>
      <div className={ `${ styles.productCard } ${ className }` } style={ customStyles } >

        { 
          children && children({
             count: counter,
             isMaxCountReached,
             maxCount: initialValues?.maxCount,
             product,

             increaseBy,
             reset
          }) 
       }

      </div>
    </Provider>
  )
}



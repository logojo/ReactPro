import { useContext } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';

interface Props {
  title?     : string; 
  className? : string
  customStyles? : React.CSSProperties | undefined;
}

export const ProductTitle = ({ title, className, customStyles } : Props ) => {
    const { product } = useContext(productContext);
    return (
      <span 
        className={ `${ styles.productDescription } ${ className }` }
        style={ customStyles }
      >
          { title ? title : product?.title }
      </span>  
    )
  }
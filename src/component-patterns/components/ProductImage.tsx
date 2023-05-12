import { useContext } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';
import noImage from '../assets/images/no-image.jpg';

interface Props {
  img?     : string; 
  className? : string;
  customStyles? : React.CSSProperties | undefined;
}

export const ProductImage = ({ img = '', className, customStyles } : Props) => {
    const { product } = useContext(productContext);
    let imgToShow : string;
    if( img ) {
      imgToShow = img;
    } else if(product.img ){
      imgToShow = product.img;
    }else {
      imgToShow = noImage
    }
  
    return (
      <img 
        className={ `${ styles.productImg } ${ className }` } 
        src={ imgToShow } 
        alt='Product Image' 
        style={ customStyles }
      />   
    )
  }
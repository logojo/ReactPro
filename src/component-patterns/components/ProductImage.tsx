import { useContext } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';
import noImage from '../assets/images/no-image.jpg';

export const ProductImage = ({ img = ''}) => {
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
      <img className={ styles.productImg } src={ imgToShow } alt='Product Image' />   
    )
  }
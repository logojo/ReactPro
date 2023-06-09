import styles from '../assets/styles/styles.module.css';
import noImage from '../assets/images/no-image.jpg';
import { useProducts } from '../hooks/useProducts';


interface Props {
    product: Product;
}

interface Product {
    id    : string;
    title : string;
    img?  : string;
}


export const ProductCardTraditional = ({ product } : Props) => {
  const { counter, increaseBy } = useProducts();
    
  return (
    <div className={ styles.productCard }>
      <img className={ styles.productImg } src={ product.img ?  product.img : noImage} alt='coffee' />            

      <span className={ styles.productDescription}>{ product.title }</span>

      <div className={styles.buttonsContainer}>
        <button 
            className={ styles.buttonMinus}
            onClick={() => increaseBy( -1 )}
        >
            -
        </button>

        <div className={styles.countLabel}>{ counter }</div>

        <button 
            className={ styles.buttonAdd }
            onClick={() => increaseBy( 1 )}
        >
            +
        </button>
      </div>

    </div>
  )
}

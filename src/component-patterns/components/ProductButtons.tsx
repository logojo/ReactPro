import { useContext } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext(productContext);
  
    return (
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
    )
  }
  
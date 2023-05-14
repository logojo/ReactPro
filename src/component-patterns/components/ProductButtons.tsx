import { useContext } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';

interface Props {
    className? : string;
    customStyles? : React.CSSProperties | undefined;
}
export const ProductButtons = ({ className, customStyles } : Props ) => {
    const { counter, increaseBy } = useContext(productContext);
  
    return (
      <div className={`${styles.buttonsContainer} ${ className }`}>
          <button 
              className={ styles.buttonMinus }
              onClick={() => increaseBy( -1 )}
              style={ customStyles }
          >
              -
          </button>
  
          <div className={styles.countLabel}  style={ customStyles }>{ counter }</div>
  
          <button 
              className={  `${ styles.buttonAdd } ${ className }`}
              onClick={() => increaseBy( 1 )}
              style={ customStyles }
          >
              +
          </button>
        </div>
    )
  }
  
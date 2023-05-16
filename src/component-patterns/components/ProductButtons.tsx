import { useCallback, useContext, useState } from "react";
import { productContext } from "./ProductCardCompound";
import styles from '../assets/styles/styles.module.css';

interface Props {
    className? : string;
    customStyles? : React.CSSProperties | undefined;
}
export const ProductButtons = ({ className, customStyles } : Props ) => {
    //Todo: MaxCount
    const { counter, maxCount, increaseBy } = useContext(productContext);
    //const [isMaxReached, setIsMaxReached] = useState(false)
    //Todo: isMaxReached = useCallback, [ count, maxCount ]
    // true si count === maxCount
    // false si count !== maxCount

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );   

    
    
  
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
              className={  `${ styles.buttonAdd } ${ className } ${  isMaxReached() ? styles.disabled : ''  } `}
              onClick={() => increaseBy( 1 )}
              style={ customStyles }
              disabled={isMaxReached()}
          >
              +
          </button>
        </div>
    )
  }
  
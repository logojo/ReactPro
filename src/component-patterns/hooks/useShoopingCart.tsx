import { useState } from 'react'
import { Product } from '../interfaces/products';

interface ProductInCart extends Product {
  count: number;
}

export const useShoopingCart = () => {
  const [ shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart }>({});

  const onProductCountChange = ( { count, product } : { count: number , product : Product } ) => {

    setShoppingCart( prev => {

      const productInCart : ProductInCart = prev[product.id] || { ...product, count: 0 };

      //Agregar Producto
      if(  Math.max( productInCart.count + count, 0 ) > 0 ) {
           productInCart.count += count;
           return {
             ...prev,
             [product.id]: productInCart
           }
      }
      

      //borrar Producto
      const { [product.id]: toDelete, ...rest } = prev;         
      return rest


        //   if( count === 0 ){
        //      const { [product.id]: toDelete, ...rest } = prev;         
        //      return rest
        //   }
          
        //   return {
        //     ...prev,
        //     [ product.id ] : { ...product, count}
        //   }
    })
    
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}

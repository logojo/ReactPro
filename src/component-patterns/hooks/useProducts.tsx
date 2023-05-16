import { useEffect, useRef, useState } from 'react'
import { InitialValue, Product, ProductCard } from '../interfaces/products';

interface useProductArgs {
   product: Product;
   onChange?: (args : ProductCard ) => void;
   value?: number;
   initialValues? : InitialValue
}
export const useProducts = ({ onChange, product, value = 0, initialValues } : useProductArgs  ) => {
 const [counter, setCounter] = useState<number>(initialValues?.count || value);
 //const isControlled = useRef( !!onChange ) // esto se utiliza para la segunda opcion del carrito
 const isMonunted = useRef(false)
 
 const increaseBy = ( value : number ) => {
   // if(isControlled.current){
   //    return onChange!({ count: value, product})
   // }   

   const newValue = Math.max(counter + value, 0)

   if( initialValues?.maxCount && newValue > initialValues?.maxCount )return;
   
    setCounter( newValue  )
    //Con esto validamos que la funcion tenga un valor
    onChange && onChange({ count: newValue, product})
 }

 const reset = (  ) => {
  setCounter( initialValues?.count || value )
 }

 useEffect(() => {  
  
  if( !isMonunted.current  ) return
   setCounter( value )
 }, [value])

 
  return {
   counter,
   maxCount: initialValues?.maxCount,
   isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,

   increaseBy,
   reset
  }
}

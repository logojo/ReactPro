import React, { useEffect, useRef, useState } from 'react'
import { Product, ProductCard } from '../interfaces/products'

interface useProductArgs {
   product: Product;
   onChange?: (args : ProductCard ) => void;
   value?: number;
}
export const useProducts = ({ onChange, product, value = 0 } : useProductArgs  ) => {
 const [counter, setCounter] = useState(value);
 const isControlled = useRef( !!onChange )

 
 const increaseBy = ( value : number ) => {
   if(isControlled.current){
      return onChange!({ count: value, product})
   }
   
   const newValue = Math.max(counter + value, 0)
   setCounter( newValue  )

    //Con esto validamos que la funcion tenga un valor
    onChange && onChange({ count: newValue, product})
 }

 useEffect(() => {
   setCounter( value )
 }, [value])

  return {
   counter,
   increaseBy
  }
}

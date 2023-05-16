
import { useCallback, useState, Suspense } from 'react';
import ProductCardCompound, { ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/data'
import Todos from '../components/Todos';

const product = products[0]

export const ShoppingStateInitializer = () => {
  return (
        <>
            <h1>ShoppingStateInitializer</h1>
            <hr />
           
            <ProductCardCompound 
                key={ product.id }
                product={ product }
                className="bg-dark color-bg-dark"
                initialValues={{
                    count: 4,
                    maxCount:10
                }}
            >
                {
                    ({ count, isMaxCountReached, increaseBy, reset }) => (
                        <>
                        <ProductImage className="custom-image" customStyles={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>      
                        <ProductTitle  className="fz-bg-dark"/>
                        <ProductButtons 
                          className="custom-button-bg-dark"
                        /> 
                     
                       <button onClick={()=>increaseBy(-2)}>-2</button>
                       <button onClick={reset}>Reset</button>
                       {
                        !isMaxCountReached &&  <button onClick={()=>increaseBy(2)}>+2</button>
                       }
                      <span>{count}</span>
                       
                        </>
                    )
                }
            </ProductCardCompound>

        </>
  )
}

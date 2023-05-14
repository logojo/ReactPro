import React from 'react'
import { useShoopingCart } from '../hooks/useShoopingCart'
import ProductCardCompound, { ProductButtons, ProductImage } from '.'

export const Cart = () => {
  const { shoppingCart, onProductCountChange } = useShoopingCart()
  console.log('adsasda');
  
  return (
    <div className="shopping-cart">
      <span>carro</span>
            {
            Object.entries( shoppingCart ).map(([ key, product]) => (

                <ProductCardCompound 
                key={key}
                product={ product }
                className="bg-dark color-bg-dark"
                customStyles={{ width: '100px'}}
                value={ product.count }
                onChange= {onProductCountChange}
                >
                <ProductImage className="custom-image" customStyles={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                <ProductButtons 
                    className="custom-button-bg-dark"
                    
                />              
                </ProductCardCompound>
            ))
            }
    </div>
  )
}

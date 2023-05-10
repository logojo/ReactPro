import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'


const product = {
 id: '1',
 title: 'American coffee',
 img: './coffee-mug.png'
}

export const Shopping = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {/* <ProductCardTraditional product={ product } /> */}
            
            {/* 
              Compound Component Pattern 
              Esta forma de importacion se puede realizar agregardo como propiedad
              del componente padre los componentes hijos
              tal como se hizo hasta el final del ProductCardCompound
            */}
            
            <ProductCard product={ product }>
              <ProductCard.Image />      
              <ProductCard.Title title={'Titulo enviado'}/>
              <ProductCard.Buttons />              
            </ProductCard>

            <ProductCard product={ product }>
              <ProductImage />      
              <ProductTitle />
              <ProductButtons />              
            </ProductCard>
        </div>
    </div>
  )
}

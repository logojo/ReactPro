import { ProductCardCompound, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/data';
import { useShoopingCart } from '../hooks/useShoopingCart';


export const ShoppingControlProps = () => {
  const { shoppingCart, onProductCountChange } = useShoopingCart()
  return (
   <>
    <h1>ShoppingControlProps</h1>
        <hr />
        
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
              {
                products.map( product => (
                  <ProductCardCompound 
                    key={ product.id }
                    product={ product }
                    className="bg-dark color-bg-dark"
                    onChange= {onProductCountChange}
                    value={ shoppingCart[product.id]?.count  }
                
                  >
                    <ProductImage className="custom-image" customStyles={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>      
                    <ProductTitle  className="fz-bg-dark"/>
                    <ProductButtons className="custom-button-bg-dark" />              
                  </ProductCardCompound>

                ))
              }
          </div>

           <div className="shopping-cart">
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
   </>
  )
}

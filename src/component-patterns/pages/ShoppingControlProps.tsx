import { ProductCardCompound, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Cart } from '../components/Cart';
import { useShoopingCart } from '../hooks/useShoopingCart';
import { Product } from '../interfaces/products';

const product = {
    id: '1',
    title: 'American coffee',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug meme',
    img: './coffee-mug2.png'
}


const products: Product[] = [product, product2]

export const ShoppingControlProps = () => {
  const { shoppingCart, onProductCountChange } = useShoopingCart()
  return (
   <>
    <h1>Shopping Store</h1>
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

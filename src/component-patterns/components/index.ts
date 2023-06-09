import  { ProductCardCompound  } from './ProductCardCompound'

import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'
import { ProductCardProps } from '../interfaces/products'

export { ProductTitle } from './ProductTitle'
export { ProductImage } from './ProductImage'
export { ProductButtons } from './ProductButtons'
export { ProductCardTraditional } from './ProductCardTraditional'



// Se agrego los componentes hijos como propiedades del padre
export const ProductCard : ProductCardProps =  Object.assign( ProductCardCompound, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard
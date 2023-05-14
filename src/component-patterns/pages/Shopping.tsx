import { ProductCardCompound, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../assets/styles/custom-styles.css';

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
            
            <ProductCardCompound product={ product } className="bg-dark color-bg-dark">
              <ProductCardCompound.Image className="custom-image"/>      
              <ProductCardCompound.Title title={'Titulo enviado'} className="fz-bg-dark"/>
              <ProductCardCompound.Buttons className="custom-button-bg-dark"/>              
            </ProductCardCompound>
            


             {/* 
              Agregando clases personalizados al componente
            */}

            <ProductCardCompound 
              product={ product }
              className="bg-dark color-bg-dark"
            >
              <ProductImage className="custom-image" customStyles={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>      
              <ProductTitle  className="fz-bg-dark"/>
              <ProductButtons className="custom-button-bg-dark" />              
            </ProductCardCompound>

             {/* 
              Agregando estilos personalizados al componente
            */}

            <ProductCardCompound 
              product={ product }
              customStyles={{ backgroundColor: '#70D1F8', color: 'black' }}
            >
              <ProductImage customStyles={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>      
              <ProductTitle  />
              <ProductButtons customStyles={{ borderColor: 'black', color: 'black' }} />              
            </ProductCardCompound>

        </div>
    </div>
  )
}

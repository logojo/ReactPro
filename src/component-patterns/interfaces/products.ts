import { Props } from "../components/ProductCardCompound";

export interface Product {
    id    : string;
    title : string;
    img?  : string;
}


export interface ProductContextProps {
  counter   : number;
  product   : Product;
  maxCount?   : number;
  increaseBy : ( value : number ) => void; 
}

interface Component {
  title?: string;
  className?: string;
  img?: string;
}

export interface ProductCardProps {
  ({ product, children }: Props) : JSX.Element
  Title:   ({ title, className }: Component ) => JSX.Element;
  Image:   (Props : Component) => JSX.Element; 
  Buttons: ( Props: { className? : string}) => JSX.Element; // para agregar las props a la interfas se puede hacer así o de la forma que esta arriba con el title e Imagen
}

export interface ProductCard {
  product: Product; 
  count: number;
}

export interface InitialValue {
  count?    : number,
  maxCount? : number
}

export interface ProductCardHandlers {
  count?: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy : ( value : number ) => void;
  reset : () => void;
}
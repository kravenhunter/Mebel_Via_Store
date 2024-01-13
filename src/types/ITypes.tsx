export interface IFilterSearch {
  proposes: string;
  weight: number;
  height: number;
  depth: number;
  coverTypes: string[];
  carcasTypes: string[];
  mecanizmTypes: string[];
  fasadeColors: string[];
  tableColors: string[];
}

export interface ICard {
  id: number;
  discount: number;
  imagePreview: string;
  imageDetails1: string;
  imageDetails2: string;
  imageDetails3: string;
  imageDetails4: string;
  title: string;
  price: number;
  article: string;
  complect: string;
  colorFasad: string;
  colorCarcas: string;
  onTheStore: boolean;
  weight: number;
  height: number;
  depth: number;
  specification: ISpecification;
}

export interface ISpecification {
  fasadMaterial: string;
  carcasMaterial: string;
  handsMaterial: string;
  baseOfMaterial: string;
  fasadCover: string;
  leadType: string;
  liftMechanizm: string;
  clothBox: string;
  ortoBaseCover: string;
}

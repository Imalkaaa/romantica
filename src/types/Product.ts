export interface Product {
  id: string;
  name: string;
  category: 'gifts' | 'pencil-arts' | 'accessories';
  price: number;
  description: string;
  imageUrl: string;
  available: boolean;
  gallery?: string[];
  features?: string[];
  specifications?: { [key: string]: string };
}

export interface GoogleSheetRow {
  'Product Name': string;
  'Category': string;
  'Price': string;
  'Description': string;
  'Image URL': string;
  'Available (Yes/No)': string;
}
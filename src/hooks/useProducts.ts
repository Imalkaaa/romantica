import { useState, useEffect } from 'react';
import { Product, GoogleSheetRow } from '../types/Product';

// Mock Google Sheets data - Replace with actual Google Sheets API call
const mockGoogleSheetData: GoogleSheetRow[] = [
  {
    'Product Name': 'Romantic Rose Bouquet',
    'Category': 'gifts',
    'Price': '2500',
    'Description': 'Beautiful handcrafted rose bouquet perfect for special occasions',
    'Image URL': 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Custom Portrait Drawing',
    'Category': 'pencil-arts',
    'Price': '3500',
    'Description': 'Personalized pencil portrait from your favorite photo',
    'Image URL': 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Pearl Bracelet',
    'Category': 'accessories',
    'Price': '1500',
    'Description': 'Elegant handmade pearl bracelet with gold accents',
    'Image URL': 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Love Letter Gift Box',
    'Category': 'gifts',
    'Price': '2000',
    'Description': 'Curated gift box with romantic items and handwritten note',
    'Image URL': 'https://images.pexels.com/photos/264896/pexels-photo-264896.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Couple Portrait Sketch',
    'Category': 'pencil-arts',
    'Price': '4500',
    'Description': 'Beautiful couple portrait in pencil art style',
    'Image URL': 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Golden Heart Necklace',
    'Category': 'accessories',
    'Price': '1800',
    'Description': 'Delicate golden heart necklace, perfect for gifting',
    'Image URL': 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Anniversary Gift Set',
    'Category': 'gifts',
    'Price': '3200',
    'Description': 'Complete anniversary package with flowers, chocolates, and personalized card',
    'Image URL': 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Pet Portrait Drawing',
    'Category': 'pencil-arts',
    'Price': '2800',
    'Description': 'Custom pencil portrait of your beloved pet',
    'Image URL': 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    'Available (Yes/No)': 'Yes'
  },
  {
    'Product Name': 'Rose Gold Earrings',
    'Category': 'accessories',
    'Price': '2200',
    'Description': 'Elegant rose gold earrings with crystal accents',
    'Image URL': 'https://images.pexels.com/photos/1454166/pexels-photo-1454166.jpeg',
    'Available (Yes/No)': 'Yes'
  }
];

const transformGoogleSheetData = (data: GoogleSheetRow[]): Product[] => {
  return data.map((row, index) => ({
    id: `product-${index + 1}`,
    name: row['Product Name'],
    category: row['Category'] as 'gifts' | 'pencil-arts' | 'accessories',
    price: parseFloat(row['Price']),
    description: row['Description'],
    imageUrl: row['Image URL'],
    available: row['Available (Yes/No)'].toLowerCase() === 'yes'
  }));
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In production, replace this with actual Google Sheets API call
        // const response = await fetch('YOUR_GOOGLE_SHEETS_API_URL');
        // const data = await response.json();
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const transformedData = transformGoogleSheetData(mockGoogleSheetData);
        setProducts(transformedData.filter(product => product.available));
        setError(null);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return { products, loading, error, getProductsByCategory };
};
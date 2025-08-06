import ProductItem from './ProductItem';
import { useProducts } from '../context/ProductContext';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      {loading && <p className='text-center text-lg'>Loading products...</p>}
      {error && <div className='error'>{error}</div>}
      <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

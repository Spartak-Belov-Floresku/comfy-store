import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
    const { meta } = useLoaderData();
    const totalProducts = meta?.pagination?.total || 0;
    const [layout, setLayout] = useState('grid');

    const setActiveStyle = pattern => {
      return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-secondary' : 'btn-ghost'}`;
    }

    return (
      <div>
        <div className='flex items-center justify-between mb-8 border-b border-base-300 pb-5'>
          <h4 className='font-medium text-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-2'>
            <button 
              type='button' 
              className={setActiveStyle('grid')} 
              onClick={() => setLayout('grid')}
            >
              <BsFillGridFill />
            </button>
            <button 
              type='button' 
              className={setActiveStyle('list')} 
              onClick={() => setLayout('list')}
            >
              <BsList />
            </button>
          </div>
        </div>
        <div>
          {totalProducts === 0 
          ? (
              <h5 className='text-2xl mt-16'>
                No products found
              </h5>
            ) 
          : layout === 'grid' ? <ProductsGrid /> : <ProductsList />}
        </div>
      </div>
    )
}

export default ProductsContainer

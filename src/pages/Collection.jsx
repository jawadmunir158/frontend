import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target?.value || e;
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value));
    } else {
      setSubCategory(prev => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='pt-10 border-t'>

      {/* Title + Sort */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-6'>
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
        <select
          onChange={(e) => setSortType(e.target.value)}
          className='border-2 border-gray-300 text-sm px-2 py-1 mt-2 sm:mt-0'
        >
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      {/* Top Category Filter */}
      <div className='border border-gray-300 p-4 rounded-lg mb-8'>
        <div className='flex justify-center gap-10 flex-wrap text-sm font-light text-gray-700'>

          {/* Men */}
          <div className="group relative text-center">
            <label className='cursor-pointer'>
              <input type="checkbox" value={'Men'} onChange={toggleCategory} className="mr-1" />
              Men
            </label>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border shadow-md p-3 rounded z-10 w-40 text-left">
              <label className='block hover:underline cursor-pointer'>
                <input type="checkbox" value={'Face-Wash'} onChange={toggleSubCategory} className='mr-1' />
                Face-Wash
              </label>
              <label className='block hover:underline cursor-pointer'>
                <input type="checkbox" value={'Creams'} onChange={toggleSubCategory} className='mr-1' />
                Creams
              </label>
            </div>
          </div>

          {/* Women */}
          <div className="group relative text-center">
            <label className='cursor-pointer'>
              <input type="checkbox" value={'Women'} onChange={toggleCategory} className="mr-1" />
              Women
            </label>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border shadow-md p-3 rounded z-10 w-40 text-left">
              <label className='block hover:underline cursor-pointer'>
                <input type="checkbox" value={'Creams'} onChange={toggleSubCategory} className='mr-1' />
                Creams
              </label>
              <label className='block hover:underline cursor-pointer'>
                <input type="checkbox" value={'Face-Wash'} onChange={toggleSubCategory} className='mr-1' />
                Face-Wash
              </label>
            </div>
          </div>

          {/* Kids */}
          <div className="group relative text-center">
            <label className='cursor-pointer'>
              <input type="checkbox" value={'Kids'} onChange={toggleCategory} className="mr-1" />
              Kids
            </label>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border shadow-md p-3 rounded z-10 w-40 text-left">
              <label className='block hover:underline cursor-pointer'>
                <input type="checkbox" value={'Creams'} onChange={toggleSubCategory} className='mr-1' />
                Creams
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {filterProducts.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            image={item.image}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;

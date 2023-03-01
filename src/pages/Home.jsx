import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../components/Home/CardProduct/CardProduct';
import FilterCategory from '../components/Home/FilterCategory';
import FilterPrice from '../components/Home/FilterPrice';
import ToOrderProducts from '../components/Home/ToOrderProducts';
import ToOrderProductsByName from '../components/Home/ToOrderProductsByName';

import './styles/home.css';

const Home = () => {
  const [productsFilter, setProductsFilter] = useState();
  const [inputValue, setInputValue] = useState('');
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      setProductsFilter(products);
    }
  }, [products]);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((prod) =>
      prod.title.toLowerCase().includes(inputValue)
    );
    setProductsFilter(filter);
    setInputValue(e.target.value);
  };

  const filterCallBack = (prod) =>
    +prod.price > inputPrice.from && +prod.price <= inputPrice.to;

  return (
    <div className='home__container'>
      <div className='filter__products'>
        <article>
          <h4>Filter By </h4>
          <FilterPrice setInputPrice={setInputPrice} />
          <FilterCategory setInputValue={setInputValue} />
        </article>
        <article>
          <div >
            <h4>Order By </h4>
          </div>
          <div>
            <div >
              <h4>Price</h4>
              <ToOrderProducts />
            </div>
            <div >
              <h4>Name</h4>
              <ToOrderProductsByName />
            </div>
          </div>
        </article>
      </div>
      <div className='filter__products-results'>
        <input
          className='input__search'
          placeholder='What are you looking for?'
          value={inputValue}
          onChange={handleChange}
          type='text'
        />
        <div className='products__container'>          {productsFilter?.filter(filterCallBack).length !== 0 ? (
          productsFilter
            ?.filter(filterCallBack)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))
        ) : (
          <img
            className='product-not-found'
            src='https://evgracias.com/images/no-products.jpg'
            alt=''
          />
        )}
        </div>
      </div>
    </div >
  );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDescription from '../components/ProductInfo/ProductDescription';
import { useSelector } from 'react-redux';
import CardProduct from '../components/Home/CardProduct/CardProduct';
import SliderImg from '../components/ProductInfo/SliderImg';
import './styles/productInfo.css'

const ProductInfo = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState();

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(
        (prod) => prod.category.name === product.category
      );
      setSimilarProducts(pivot);
    }
  }, [allProducts, product]);

  return (
    <div className='product-info-main'>
      <div className="product-info-container">
        <SliderImg listImgs={product?.productImgs} />
        <ProductDescription product={product} />
      </div>
      <section className='product-similar'>
        <h2 className='product-similar-title'>Discover Similar Items</h2>
        <div className="similar-product-container">
          {similarProducts?.map((simProd) => {
            if (simProd.title !== product.title) {
              return <CardProduct key={simProd.id} product={simProd} />;
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;

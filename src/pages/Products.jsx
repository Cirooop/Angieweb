// import React from 'react'
import '../pages/Products.css';
import productData from '../assets/productData';

const Products = () => {
  return (
    <div className="products-container">
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
            <button className="comprar">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

import './Home.css';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase.js"; // Ya importas correctamente Firebase

const Home = () => {
  const [products, setProducts] = useState([]);
  const dataBase = db;

  // Este useEffect es para obtener los productos de Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(dataBase, "products");
        const productsSnapShot = await getDocs(productsCollection);
        const productList = productsSnapShot.docs.map(doc => ({
          id: doc.id, // Usamos el id de Firestore
          ...doc.data()
        }));
        setProducts(productList); // Actualizamos el estado con los productos
      } catch (error) {
        console.error("Error fetching products:", error); // Captura cualquier error
      }
    };
    fetchProducts();
  }, []); // Solo se ejecuta una vez al cargar el componente

  return (
    <>
      {/* Primera Sección: Bienvenida con logo y botón */}
      <section className="bienvenida">
        <div className="bienvenida-container">
          <img 
            src="/assets/imggeneral/letraslogo2.png" // Asegúrate de que la ruta es correcta, comenzando desde la raíz
            alt="Logo" 
            className="logohome" 
          />
          <h1>Bienvenidos a Nuestra Tienda</h1>
          <button 
            className="bienvenida-btn" 
            onClick={() => window.location.href = '/productos'}
          >
            Comprar
          </button>
        </div>
      </section>

      {/* Segunda Sección: Cards de productos */}
      <section className="products-section">
        <div className="products-container">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image" 
              />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-sku">SKU: {product.sku}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tercera Sección: Producto destacado */}
      <section className="featured-section">
        <div className="featured-product">
          <h2>Nuevo Producto Destacado</h2>
          {/* Imagen destacada */}
          <img 
            src={products.length > 0 ? products[0].image : '/assets/img/default.jpg'} // Usamos un valor predeterminado si no hay productos
            alt={products.length > 0 ? products[0].name : 'Producto Destacado'}
            className="featured-image" 
          />
          <div className="featured-info">
            <h3>{products.length > 0 ? products[0].name : 'Producto Desconocido'}</h3>
            <p>{products.length > 0 ? products[0].description : 'Descripción del producto'}</p>
            <p className="featured-price">${products.length > 0 ? products[0].price : '0.00'}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

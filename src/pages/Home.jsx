import './Home.css';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase.js"; 

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
          id: doc.id, 
          ...doc.data()
        }));
        setProducts(productList); 
      } catch (error) {
        console.error("Error fetching products:", error); 
      }
    };
    fetchProducts();
  }, []); 

  return (
    <>
      {/* Primera Sección: Bienvenida con logo y botón */}

      <section className="bienvenida">
        <div className="bienvenida-container">
          <img 
            src="src\assets\imggeneral\letraslogo3.png" // Asegúrate de que la ruta es correcta, comenzando desde la raíz
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

                <div className="imgp">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image" 
                    />
                </div>

                <div className='containername'>
                  <p className="product-name">{product.name}</p>
                </div>

                  <p className="product-price">$ {product.price}</p>
                  <button className="add-to-cart-btn">Agregar al carrito</button>

            </div>
          ))}
        </div>
      </section>

      {/* Sección de producto destacado */}

      <section className="featured-section">
        <div className="featured-product">

          <h2>Nuevo Producto Destacado</h2>
          <img 
            src="src/assets/imggeneral/Newproduct.png" 
            alt="Producto Destacado"
            className="featured-image" 
          />
          <div className="featured-info">
            <p>¡Conocé la nueva máquina de depilación láser de diodo 2024! Un dispositivo profesional de depilación con 3 longitudes de onda para resultados efectivos y duraderos. Diseño elegante en negro, ideal para todo tipo de piel.</p>
          </div>
          
        </div>
      </section>

    </>
  );
};

export default Home;

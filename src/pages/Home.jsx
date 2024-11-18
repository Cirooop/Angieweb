import './Home.css';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; 
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const Home = () => {
  const [products, setProducts] = useState([]);
  const dataBase = db;
  const navigate = useNavigate(); // Creamos una instancia de useNavigate

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <section className="bienvenida">
        <div className="bienvenida-container">
          <img 
            src="https://i.imgur.com/Jta8nRF.png"
            alt="Logo" 
            className="logohome" 
          />
          <h1>Bienvenidos a Nuestra Tienda</h1>
          <button 
            className="bienvenida-btn" 
            onClick={() => scrollToSection('section2')}
          >
            Comprar
        </button>
        </div>
      </section>

      <div className="separador1"></div>

      {/* Segunda Sección: Cards de productos */}
      <section className="section2" id='section2'>
        <div className="titulo2">
          <h2>Productos Destacados</h2>
          <p>Explore nuestra selección de productos destacados</p>
        </div>
        <div className="products-section">
          <div className="products-container">
            {products.slice(0, 4).map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => navigate(`/products/${product.id}`)} // Redirige a la página de detalles
                style={{ cursor: 'pointer' }} // Añadimos cursor para indicar interactividad
              >
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
        </div>
      </section>
    </>
  );
};

export default Home;

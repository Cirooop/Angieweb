import './ToProduct.css'
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; 
import { useNavigate } from 'react-router-dom';

function ToProduct() {
  const [products, setProducts] = useState([]);
  const dataBase = db;
  const navigate = useNavigate(); 

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
    <section className="seccion-productos" >
        <div className="titulo-productos">
          <h2>Productos Destacados</h2>
          <p>Explore nuestra selección de productos destacados</p>
        </div>
        <div className="seccion-productos-lista">
          <div className="contenedor-productos">
            {products.slice(0, 4).map((product) => (
              <div 
                key={product.id} 
                className="tarjeta-producto"
                onClick={() => navigate(`/products/${product.id}`)} 
                style={{ cursor: 'pointer' }} 
              >
                <div className="imagen-producto">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="imagen-producto" 
                  />
                </div>
                <div className='contenedor-nombre'>
                  <p className="nombre-producto">{product.name}</p>
                </div>
                <p className="precio-producto">$ {product.price}</p>
                <button className="boton-agregar-carrito">Agregar al carrito</button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ToProduct

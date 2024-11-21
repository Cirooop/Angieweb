import { useEffect, useState } from 'react'; 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase"; 
import './New.css'

const New = () => {
  const [newProducts, setNewProducts] = useState([]); 

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        
        const productsCollection = collection(db, "newproducts"); 
        const productsSnapshot = await getDocs(productsCollection);

        
        if (productsSnapshot.empty) {
          console.log("No se encontraron productos en la colección 'newproducts'");
          return;
        }

       
        const productList = productsSnapshot.docs.map(doc => {
          const data = doc.data();

          
          const name = data.name || "Producto sin nombre"; 
          const image = data.image || ""; 
          const description = data.description || "Descripción no disponible"; 

          return {
            id: doc.id,
            name,
            image,
            description
          };
        });

        console.log("Productos obtenidos:", productList); 

        setNewProducts(productList); 
      } catch (error) {
        console.error("Error fetching products:", error); 
      }
    };

    fetchNewProducts(); 
  }, []); 

  return (
    <div className="new-products-container">
      <div className="new-content-container">
        <div className="new-header">
          <h1>Nuevos Ingresos</h1>
          <p>Descubra nuestras últimas innovaciones para el cuidado de la piel</p>
        </div>

        <div className="new-products-grid">
      
          {newProducts.map((newProduct) => (
            <div key={newProduct.id} className="new-product-card">
              <div className="new-image-container">

                {newProduct.image ? (
                  <img
                    src={newProduct.image} 
                    alt={newProduct.name} 
                    className="new-product-image"
                  />
                ) : (
                  <p>Imagen no disponible</p> 
                )}
              </div>
              <div className="new-product-info">
                <p className="new-product-name">{newProduct.name}</p> 
                <p className="new-product-description">{newProduct.description}</p> 
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </div>
  );
};

export default New;

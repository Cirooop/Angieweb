import { useEffect, useState } from 'react'; 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase"; 
import './New.css'

const New = () => {
  const [newProducts, setNewProducts] = useState([]); 

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        // Accedemos a la colección 'newproducts' en Firestore
        const productsCollection = collection(db, "newproducts"); 
        const productsSnapshot = await getDocs(productsCollection);

        // Verificamos si el snapshot tiene productos
        if (productsSnapshot.empty) {
          console.log("No se encontraron productos en la colección 'newproducts'");
          return;
        }

        // Mapeamos los documentos obtenidos para extraer los campos necesarios
        const productList = productsSnapshot.docs.map(doc => {
          const data = doc.data();

          // Validamos que los campos 'name', 'image', y 'description' existan
          const name = data.name || "Producto sin nombre"; // Valor por defecto si no existe
          const image = data.image || ""; // Valor por defecto si no existe
          const description = data.description || "Descripción no disponible"; // Valor por defecto si no existe

          return {
            id: doc.id,
            name,
            image,
            description
          };
        });

        console.log("Productos obtenidos:", productList); // Depuración para ver los datos

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
          {/* Iteramos sobre los productos obtenidos de Firebase y los mostramos */}
          {newProducts.map((newProduct) => (
            <div key={newProduct.id} className="new-product-card">
              <div className="new-image-container">
                {/* Comprobamos si 'image' tiene un valor antes de intentar mostrarla */}
                {newProduct.image ? (
                  <img
                    src={newProduct.image} // Mostramos la imagen del producto
                    alt={newProduct.name} // Usamos el nombre del producto para el alt
                    className="new-product-image"
                  />
                ) : (
                  <p>Imagen no disponible</p> // Mensaje si la imagen no existe
                )}
              </div>
              <div className="new-product-info">
                <p className="new-product-name">{newProduct.name}</p> {/* Mostramos el nombre */}
                <p className="new-product-description">{newProduct.description}</p> {/* Descripción */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default New;

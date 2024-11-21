import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import './Products.css';

const Products = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id); 
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          console.error("El producto no existe");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
  }, [id]);



  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado.</p>;


  return (
    <div className="page-container">
        <div className="product-details1">

        <img className="product-image1" src={product.image} alt={product.name} />

       
        <div className="product-info1">
            <h2>{product.name}</h2>
            <p className="sku1"><strong>SKU:</strong> {product.sku}</p>
            <p className="description1">{product.description}</p>
            <p className="price1">${product.price}</p>

           
            <button className="add-to-cart-btn1">Agregar al carrito</button>
        </div>
    </div>
    </div>
  );
};

export default Products;

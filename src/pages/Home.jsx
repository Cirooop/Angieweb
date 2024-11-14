import './Home.css';
import productData from '../assets/productData';

const Home = () => {
  return (
    <>
      {/* Primera Sección: Bienvenida con logo y botón */}
      <section className="bienvenida">
        <div className="bienvenida-container">
          <img src="src\assets\img\letraslogo2.png" alt="Logo" className="logohome" /> {/* Ajusta la ruta del logo */}
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
          {productData.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tercera Sección: Producto destacado */}
      <section className="featured-section">
        <div className="featured-product">
          <h2>Nuevo Producto Destacado</h2>
          <img src={productData[0].image} alt={productData[0].name} className="featured-image" />
          <div className="featured-info">
            <h3>{productData[0].name}</h3>
            <p>{productData[0].description}</p>
            <p className="featured-price">${productData[0].price}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import './Home.css';
import { NavLink } from 'react-router-dom';



const Home = () => {

  return (
    <>
      {/* Primera Sección: Bienvenida*/}        

      <section className="bienvenida">
        <div className="bienvenida-container">
          <img 
            src="https://i.imgur.com/Jta8nRF.png"
            alt="Logo" 
            className="logohome"/>
          <h1>Bienvenidos a Nuestra Tienda</h1>
          <NavLink to='/productos'>
            <button className="bienvenida-btn" >Comprar</button>
          </NavLink>
          <div className="contenedor-sobre-nosotros">
          <div className="titulo-sobre-nosotros">
            <h2>Sobre nosotros</h2>
            <p>
              En Angie, creemos en realzar la belleza única de cada persona. Nos
              especializamos en ofrecer productos de alta calidad diseñados para
              resaltar lo mejor de ti, desde tratamientos faciales hasta soluciones
              de cuidado personal. Nuestra misión es brindar una experiencia de
              compra sencilla, segura y personalizada, para que encuentres exactamente
              lo que necesitas para verte y sentirte increíble.
            </p>
          </div>
        </div>
        </div>
        
      </section>

    </>
  );
};

export default Home;

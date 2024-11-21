import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiLogIn } from "react-icons/fi";
import Login from '../pages/Login'; 
import { MdLocalShipping } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import ScrollToTop from './ScrollToTop';
import { FaShoppingCart } from "react-icons/fa";
import { auth } from "../firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado

  const openLoginModal = () => setIsLoginOpen(true); 
  const closeLoginModal = () => setIsLoginOpen(false); 

  useEffect(() => {
    // Escuchar cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Actualiza el usuario autenticado
    });

    return () => unsubscribe(); // Limpia la suscripción al desmontar el componente
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión en Firebase
      alert('Has cerrado sesión exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header>
      <ScrollToTop />
      <div className="header">
        <div className="topheader">
          <p>Descuento del 15% con transferencia o efectivo | 6 cuotas sin interés | Envío gratis en compras desde $120.000.</p> 
          <div className="iconship"><MdLocalShipping /></div>
        </div>
        <div className="last_header">
          <div className="space">
            <div className="menulinea"><IoIosMenu /></div>
          </div>
          <div className="nav">
            <ul className="menu">
              <li><NavLink to='/new' className='link'>Nuevo</NavLink></li>
            </ul>
            <div className="logo">
              <NavLink to='/'><img src="https://i.imgur.com/PU65vRD.png" alt="" /></NavLink>
            </div>
            <ul className="menu">
              <li><NavLink to='/productos' className='link'>Productos</NavLink></li>
            </ul>
          </div>
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>

            {user ? ( // Si hay un usuario autenticado
              <div className="btn">
                <button onClick={handleLogout} className="link">Logout</button>
              </div>
            ) : ( // Si no hay usuario autenticado
              <div className="btn">
                <button onClick={openLoginModal} className="link">Login</button>
              </div>
            )}

            <div className="carrito">
              <NavLink to='/#' className='linkc'> 
                <FaShoppingCart />
                <div className="car-count">0</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {isLoginOpen && <Login onClose={closeLoginModal} />} 
    </header>
  );
}

export default Navbar;

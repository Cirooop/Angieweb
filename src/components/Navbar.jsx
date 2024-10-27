import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { PiShippingContainer } from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import Login from '../pages/Login'; 

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true); 
  const closeLoginModal = () => setIsLoginOpen(false); 

  return (
    <header>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <PiShippingContainer />
          </div>
          <div className="info">
            <p>Envio gratis a partir de $10.000</p>
          </div>
        </div>
        <div className="last_header">
          <div className="nav">
            <ul className="menu">
              <li><NavLink to='/' className='link'><FaHome /></NavLink></li>
              <li><NavLink to='/new' className='link'>Nuevo</NavLink></li>
              <li><NavLink to='/offer' className='link'>Ofertas</NavLink></li>
              <li><NavLink to='/products' className='link'>Home</NavLink></li>
            </ul>
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={openLoginModal} className='link'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoginOpen && <Login onClose={closeLoginModal} />} 
    </header>
  );
}

export default Navbar;

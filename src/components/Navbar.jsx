import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiLogIn } from "react-icons/fi";
import Login from '../pages/Login'; 
import { MdLocalShipping } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import ScrollToTop from './ScrollToTop';


function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true); 
  const closeLoginModal = () => setIsLoginOpen(false); 

  return (
        <header>
          <ScrollToTop/>
          <div className="header">
            <div className="topheader">
              <p>Descuento del 15% con transferencia o efectivo | 6 cuotas sin interés | Envío gratis en compras desde $120.000.</p> 
              <div className="iconship"><MdLocalShipping /></div>
            </div>
            <div className="last_header">
              <div className="space">
                <div className="menulinea"><IoIosMenu />
                </div>
              </div>
              <div className="nav">
                <ul className="menu">
                  <li><NavLink to='/new' className='link'>Nuevo</NavLink></li>
                </ul>
                <div className="logo">
                  <NavLink to='/'><img src="https://i.imgur.com/PU65vRD.png" alt="" /></NavLink>
                </div>
                <ul className="menu">
                  <li><NavLink to='/offers' className='link'>Ofertas</NavLink></li>
                </ul>
              </div>
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
          {isLoginOpen && <Login onClose={closeLoginModal} />} 
        </header>
  );
}

export default Navbar;

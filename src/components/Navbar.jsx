import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiLogIn } from "react-icons/fi";
import Login from '../pages/Login'; 
import { MdLocalShipping } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";


function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true); 
  const closeLoginModal = () => setIsLoginOpen(false); 

  return (
        <header>
          <div className="header">
            <div className="topheader">
              <p>Envio gratis con la compra mínima de $10.000</p> 
              <div className="iconship"><MdLocalShipping /></div>
            </div>
            <div className="last_header">
              <div className="space">
                <div className="menulinea"><IoIosMenu />
                </div>
              </div>
              <div className="nav">
                <ul className="menu">
                  <li><NavLink to='/new' className='link'>New</NavLink></li>
                </ul>
                <div className="logo">
                  <NavLink to='/'><img src="src\assets\img\logo3.png" alt="" /></NavLink>
                </div>
                <ul className="menu">
                  <li><NavLink to='/offers' className='link'>Offers</NavLink></li>
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

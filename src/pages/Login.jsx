import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'; 
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="login" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="contenedor">
          <form onSubmit={handleSubmit}>
            <h1>{isRegister ? 'Regístrate' : 'Login'}</h1>
            <div className="input-box">
              <input type="text" placeholder='Usuario' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Contraseña' required />
              <FaLock className='icon' />
            </div>
            {isRegister && (
              <div className="input-box">
                <input type="email" placeholder='Email' required />
                <FaEnvelope className='icon' />
              </div>
            )}
            <div className="recuerdame">
              <label><input type="checkbox" />Recuerdame</label>
              <a href="#">¿Olvidaste la contraseña?</a>
            </div>
            <button type='submit'>{isRegister ? 'Regístrate' : 'Login'}</button>
            <div className="register-link" onClick={() => setIsRegister(!isRegister)}>
              <p>{isRegister ? '¿Ya tienes cuenta?' : '¿No tienes una cuenta?'} <a href="#">{isRegister ? 'Inicia sesión aquí' : 'Regístrate aquí'}</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Login;

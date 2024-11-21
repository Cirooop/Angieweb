import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'; 
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { auth } from "../firebase.js"  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isRegister) {
        // Registro
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registro exitoso'); 
        onClose();  
      } else {
        // Inicio de sesión
        await signInWithEmailAndPassword(auth, email, password);
        alert('Inicio de sesión exitoso'); 
        onClose(); 
      }
    } catch (error) {
      setError(error.message); 
    }
  };
  

  return (
    <div className="login" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="contenedor">

          <form onSubmit={handleSubmit}>

            <h1>{isRegister ? 'Regístrate' : 'Login'}</h1>
            
            {error && <p style={{ color: 'red' }}>{error}</p>} 

            {!isRegister && (
              <>
                <div className="input-box">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <FaEnvelope className="icon" />
                </div>
              </>
            )}

            {!isRegister && (
              <div className="input-box">
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <FaLock className="icon" />
              </div>
            )}

            {isRegister && (
              <>
                <div className="input-box">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input 
                    type="text" 
                    placeholder="Apellido" 
                    required 
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <FaLock className="icon" />
              </div>
              </>
            )}

            <div className="recuerdame">
              <label>
                <input type="checkbox" /> Recuerdame
              </label>
              <a href="#">¿Olvidaste la contraseña?</a>
            </div>

            <button type="submit">
              {isRegister ? 'Regístrate' : 'Login'}
            </button>

            <div className="register-link" onClick={() => setIsRegister(!isRegister)}>
              <p>
                {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes una cuenta?'}{' '}
                <a href="#">{isRegister ? 'Inicia sesión aquí' : 'Regístrate aquí'}</a>
              </p>
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

// import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>¡Oops! Ocurrió un error</h1>
      <p style={styles.message}>
        Algo salió mal. No podemos encontrar la página que estás buscando.
      </p>
      <Link to="/" style={styles.link}>
        Volver a la página principal
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7f6', 
    color: '#2F3E46', 
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#52796F', 
  },
  message: {
    fontSize: '1.1rem',
    color: '#2F3E46', 
    maxWidth: '650px',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  link: {
    fontSize: '1rem',
    color: '#52796F', 
    textDecoration: 'none',
    border: '1px solid #52796F',
    borderRadius: '30px',
    padding: '12px 20px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  linkHover: {
    backgroundColor: '#2F3E46', 
    color: '#CAD2C5',
    transform: 'scale(1.05)', 
  },
};


export default Error;

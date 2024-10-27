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
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    borderRadius: '5px',
    padding: '10px 15px',
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default Error;

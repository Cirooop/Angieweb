// import React from 'react';

const Maintenance = () => {
    return (
      <div style={styles.contenedor}>
        <h1 style={styles.head}>Página en Mantenimiento</h1>
        <p style={styles.texto}>Estamos trabajando para mejorar esta sección. ¡Vuelve pronto!</p>
        <div style={styles.iconContenedor}>
          <span role="img" aria-label="wrench" style={styles.icon}>
            🔧
          </span>
          <span role="img" aria-label="construction" style={styles.icon}>
            🚧
          </span>
        </div>
      </div>
    );
  };
  
  const styles = {
    contenedor: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f3f4f6',
      color: '#333',
      padding: '20px',
    },
    head: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0',
    },
    texto: {
      fontSize: '1.2rem',
      margin: '10px 0 20px 0',
      maxWidth: '600px',
      lineHeight: '1.6',
    },
    iconContenedor: {
      fontSize: '3rem',
      display: 'flex',
      gap: '20px',
    },
  };
  

  export default Maintenance;
  
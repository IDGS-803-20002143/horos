import React from 'react';

function Signo({ imagen, nombre }) {
  return (
    <div className="signo">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
    </div>
  );
}

export default Signo;

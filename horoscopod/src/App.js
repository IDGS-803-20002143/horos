import React, { useState } from 'react';
import './App.css';
import Signo from './components/Signo'; // 
import Descripcion from './components/Descripcion'; // 
import Fechas from './components/Fechas'; //



const datosHoroscopo = {
  aries: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png',
    nombre: 'Aries',
    descripcion: 'Aries, el intrépido pionero del zodíaco, está lleno de energía y pasión. Son valientes y competitivos, siempre buscando nuevos desafíos.',
    fechas: 'Marzo 21 - Abril 19',
  },
  tauro: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png',
    nombre: 'Tauro',
    descripcion: 'Tauro es un signo de tierra que valora la estabilidad y la seguridad. Son pacientes, leales y disfrutan de los placeres terrenales como la comida y el lujo.',
    fechas: 'Abril 20 - Mayo 20',
  },
  geminis: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png',
    nombre: 'Géminis',
    descripcion: 'Géminis, un signo de aire, es curioso y versátil. Son comunicativos, inteligentes y les gusta mantenerse ocupados con múltiples intereses.',
    fechas: 'Mayo 21 - Junio 20',
  },
  cancer: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png',
    nombre: 'Cáncer',
    descripcion: 'Cáncer, un signo de agua, es emocional y cariñoso. Son protectores, familiares y valoran profundamente la intimidad.',
    fechas: 'Junio 21 - Julio 22',
  },
  leo: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png',
    nombre: 'Leo',
    descripcion: 'Leo es un signo de fuego que busca el reconocimiento y el brillo. Son carismáticos, generosos y tienen una fuerte autoestima.',
    fechas: 'Julio 23 - Agosto 22',
  },
  virgo: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png',
    nombre: 'Virgo',
    descripcion: 'Virgo, un signo de tierra, es meticuloso y perfeccionista. Son trabajadores, analíticos y cuidadosos en los detalles.',
    fechas: 'Agosto 23 - Septiembre 22',
  },
  libra: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png',
    nombre: 'Libra',
    descripcion: 'Libra es un signo de aire que busca el equilibrio y la armonía. Son amigables, sociables y tienen un fuerte sentido de la justicia.',
    fechas: 'Septiembre 23 - Octubre 22',
  },
  escorpio: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png',
    nombre: 'Escorpio',
    descripcion: 'Escorpio, un signo de agua, es apasionado y misterioso. Son intensos, leales y tienen una gran determinación.',
    fechas: 'Octubre 23 - Noviembre 21',
  },
  sagitario: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.png',
    nombre: 'Sagitario',
    descripcion: 'Sagitario es un signo de fuego aventurero y optimista. Son entusiastas, filosóficos y buscan la expansión y la aventura.',
    fechas: 'Noviembre 22 - Diciembre 21',
  },
  capricornio: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png',
    nombre: 'Capricornio',
    descripcion: 'Capricornio, un signo de tierra, es ambicioso y disciplinado. Son responsables, trabajadores y valoran el éxito a largo plazo.',
    fechas: 'Diciembre 22 - Enero 19',
  },
  acuario: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png',
    nombre: 'Acuario',
    descripcion: 'Acuario es un signo de aire que valora la originalidad y la libertad. Son idealistas, amigables y están comprometidos con causas sociales.',
    fechas: 'Enero 20 - Febrero 18',
  },
  piscis: {
    imagen: 'https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png',
    nombre: 'Piscis',
    descripcion: 'Piscis, un signo de agua, es sensible y compasivo. Son soñadores, intuitivos y tienen una fuerte conexión con el mundo emocional.',
    fechas: 'Febrero 19 - Marzo 20',
  },
};


function App() {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [signo, setSigno] = useState(null);
 

  const handleFechaNacimientoChange = (e) => {
    setFechaNacimiento(e.target.value);
  };

  const calcularSigno = () => {
    const fechaNacimientoParts = fechaNacimiento.split('-');
    const mes = parseInt(fechaNacimientoParts[1]);
    const dia = parseInt(fechaNacimientoParts[2]);
  
    const fechasSignos = {
      aries: { inicioMes: 3, inicioDia: 21, finMes: 4, finDia: 19 },
      tauro: { inicioMes: 4, inicioDia: 20, finMes: 5, finDia: 20 },
      geminis: { inicioMes: 5, inicioDia: 21, finMes: 6, finDia: 20 },
      cancer: { inicioMes: 6, inicioDia: 21, finMes: 7, finDia: 22 },
      leo: { inicioMes: 7, inicioDia: 23, finMes: 8, finDia: 22 },
      virgo: { inicioMes: 8, inicioDia: 23, finMes: 9, finDia: 22 },
      libra: { inicioMes: 9, inicioDia: 23, finMes: 10, finDia: 22 },
      escorpio: { inicioMes: 10, inicioDia: 23, finMes: 11, finDia: 21 },
      sagitario: { inicioMes: 11, inicioDia: 22, finMes: 12, finDia: 21 },
      capricornio: { inicioMes: 12, inicioDia: 22, finMes: 1, finDia: 19 },
      acuario: { inicioMes: 1, inicioDia: 20, finMes: 2, finDia: 18 },
      piscis: { inicioMes: 2, inicioDia: 19, finMes: 3, finDia: 20 },
    };
  
    let signoCalculado = '';
    
  
    for (const signo in fechasSignos) {
      const { inicioMes, inicioDia, finMes, finDia } = fechasSignos[signo];
      if (
        (mes === inicioMes && dia >= inicioDia) ||
        (mes === finMes && dia <= finDia)
      ) {
        signoCalculado = signo;
        break; // Detener la búsqueda una vez que se encuentre un signo válido
      }
    }
  
    setSigno(signoCalculado);
  };
  
  return (
    <div className='App'>
    <div className="descripcion-container">
      <h1  className="titulo">Horóscopo</h1>
      <input
        type="date"
        value={fechaNacimiento}
        onChange={handleFechaNacimientoChange}
      />
      <br></br>
      <button className="calcular-button" onClick={calcularSigno}>Calcular</button>
      {signo && (
        <>
          <Signo className="Signo" imagen={datosHoroscopo[signo].imagen} nombre={datosHoroscopo[signo].nombre} />
          <Descripcion className="Descripcion" descripcion={datosHoroscopo[signo].descripcion} />
          <Fechas className="fechas" fechas={datosHoroscopo[signo].fechas} />
        </>
      )}
    </div>
    </div>
  );
}

export default App;

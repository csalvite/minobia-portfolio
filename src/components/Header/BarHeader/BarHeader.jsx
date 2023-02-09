import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BarHeader.css';

const BarHeader = () => {
  return (
    <div className='bar-header'>
      <figure>
        <img src='/resources/vectors/camera-svgrepo-com.svg' alt='logo' />
        <figcaption>ALS</figcaption>
      </figure>

      <menu>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Sobre Mi</li>
      </menu>

      <button>Contacto</button>
      <FontAwesomeIcon icon='fa-regular fa-droplet-percent' />
    </div>
  );
};

export default BarHeader;

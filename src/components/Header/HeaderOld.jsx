import BarHeader from './BarHeader/BarHeader';
import './Header.css';

const Header = () => {
  return (
    <header>
      <video src='resources/videos/headerBackground.mp4' autoPlay loop muted>
        Tu navegador no soporta video :/
      </video>

      <div className='opacity'></div>

      <div className='title-container'>
        <BarHeader />
        <h1>Adriana Lago Senande</h1>
        <h2>Fotografía y Realización de Proyectos Audiovisuales</h2>
      </div>
    </header>
  );
};

export default Header;

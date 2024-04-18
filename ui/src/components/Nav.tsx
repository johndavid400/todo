import { useNavigate, useParams } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../App.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className='main-nav' style={{ position: 'absolute', top: 0 }}>
        <button onClick={() => navigate("/test")}>Test</button>
        <button onClick={() => navigate("/nottest")}>Not Test</button>
        <button onClick={() => navigate("/lists")}>Lists</button>
        <button onClick={() => navigate("/users")}>Users</button>
      </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
};

export default Nav;

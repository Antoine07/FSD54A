import { Link, Outlet } from 'react-router-dom'

import './Layout.css'

const Layout = () => {
  return (
    <div className='main-layout'>
      <nav>
        <ul className='main-menu'>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/conversion">Conversion</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
      <hr />
       {/* Outlet rend les sous-composants */}
      <Outlet />
    </div>
  );
};

export default Layout
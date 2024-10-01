import { Link, Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
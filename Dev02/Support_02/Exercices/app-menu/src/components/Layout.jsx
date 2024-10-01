import { Link, Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <hr />
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
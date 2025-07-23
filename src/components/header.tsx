import { NavLink } from 'react-router-dom'; // or './Header.module.css' if you're using CSS modules

const Header = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          ZuluCrafts
        </NavLink>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;



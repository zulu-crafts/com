import { NavLink } from 'react-router-dom';
import Logo from '../assets/zulu-crafts-logo.png';

const Header = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header bg-white shadow-md sticky top-0 z-50">
      {/* Top row: Logo + Contact Info */}
      <div className="header-top flex items-center justify-between px-4 py-2 max-w-7xl mx-auto border-b border-gray-200">
        <NavLink to="/" className="logo flex items-center gap-2">
          <img
            src={Logo}
            alt="ZuluCrafts Logo"
            className="h-8 w-8 object-contain rounded-full border border-gray-200 shadow-sm"
          />

        </NavLink>
        <div className="contact-info text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <a href="https://wa.me/27710000000" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#293C4B"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>+27 71 000 0000
          </a>
          <a href="mailto:info@zulucrafts.com" className="hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-188L280-663v303h560v-303L560-468Zm0-98 280-194H280l280 194ZM120-120q-33 0-56.5-23.5T40-200v-500h80v500h660v80H120Zm720-546v-94H280v94-94h560v94Z"/></svg> info@zulucrafts.com
          </a>
        </div>
      </div>

      {/* Bottom row: Navigation */}
      <div className="header-bottom flex items-center justify-center px-4 py-2 max-w-7xl mx-auto">
        <nav className="nav flex space-x-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link text-gray-700 hover:text-blue-600 font-medium ${isActive ? 'border-b-2 border-blue-600' : ''
                }`
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





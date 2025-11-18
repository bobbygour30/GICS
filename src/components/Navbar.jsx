import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import assets from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const toggleSubmenu = (menu) => {
    setIsOpen(isOpen === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setIsOpen(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(null);
    }, 200);
  };

  const handleSubmenuMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(null);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Network', path: '/network' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    {
      name: 'Contact',
      subItems: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Track Consignment', path: '/track' },
        { name: 'Pickup Requests', path: '/pickup' },
        { name: 'Booking Console Sign Up', path: '/contact/signup' },
      ],
    },
  ];

  const logoUrl = assets.logo3;

  return (
    <nav className="bg-white shadow-md border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="w-20 sm:h-20 sm:w-40"
                src={logoUrl}
                alt="GICS Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                <Link
                  to={item.path || '#'}
                  className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-red-600 text-white'
                      : 'text-[#001f3f] hover:bg-[#fef2f2] hover:text-red-600'
                  }`}
                  aria-expanded={item.subItems ? isOpen === item.name : undefined}
                >
                  {item.name}
                  {item.subItems && (
                    <span className="ml-1">
                      {isOpen === item.name ? <FaCaretUp /> : <FaCaretDown />}
                    </span>
                  )}
                </Link>

                {item.subItems && isOpen === item.name && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-md py-3 z-50 border-t-4 border-red-600"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-6 py-3 text-sm font-medium transition-all duration-200 ${
                          location.pathname === subItem.path
                            ? 'bg-red-600 text-white'
                            : 'text-[#001f3f] hover:bg-[#fef2f2] hover:text-red-600'
                        }`}
                        onClick={() => setIsOpen(null)}
                        role="menuitem"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#001f3f] hover:bg-[#fef2f2] hover:text-red-600 p-2 rounded-md transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-red-600" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path || '#'}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-red-600 text-white'
                        : 'text-[#001f3f] hover:bg-[#fef2f2] hover:text-red-600'
                    }`}
                    onClick={() => {
                      if (!item.subItems) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-[#001f3f] px-4 py-3 hover:text-red-600"
                    >
                      {isOpen === item.name ? <FaCaretUp /> : <FaCaretDown />}
                    </button>
                  )}
                </div>

                {item.subItems && isOpen === item.name && (
                  <div className="pl-6 space-y-1 mt-2 border-l-4 border-red-600">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                          location.pathname === subItem.path
                            ? 'bg-red-600 text-white'
                            : 'text-[#001f3f] hover:bg-[#fef2f2] hover:text-red-600'
                        }`}
                        onClick={() => {
                          setIsOpen(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';
import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { Header } from '../pages/auth/Header';
import { Heart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-50';
  };

  return (
    <nav className="flex justify-between items-center py-4 px-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <NavLink
       to={"/"}
       className="flex items-center space-x-2 text-3xl font-bold" 
       >
          <Heart className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-gray-50">CrecheKids</span>
       </NavLink>
      {/* Menu principal */}
      <ul className="hidden md:flex justify-center items-center space-x-4">
        <li>
          <NavLink
            to="/"
            className={`${isActiveLink('/')} text-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition-colors flex gap-1 items-center`}
          >
            <FaHome />
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`${isActiveLink('/about')} text-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition-colors`}
          >
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={`${isActiveLink('/services')} text-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition-colors`}
          >
            Serviços Oferecidos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={`${isActiveLink('/contacts')} text-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition-colors`}
          >
            Contactos
          </NavLink>
        </li>
      </ul>

      {/* Dropdown e botão de inscrição */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors"
          >
            <span>Portal</span>
            <BiChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <NavLink
                to="/sign-in"
                className="block px-4 py-2 text-md text-gray-900 hover:bg-blue-50"
              >
                Login Encarregado
              </NavLink>
              <NavLink
                to="/admin"
                className="block px-4 py-2 text-md text-gray-900 hover:bg-blue-50"
              >
                Área Administrativa
              </NavLink>
            </div>
          )}
        </div>

        {/* Botão de inscrição */}
        <button className="bg-white px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
        <NavLink
                to="/inscrição"
                className="block font-bold px-4 py-2 text-md text-gray-900 hover:bg-blue"
              >
              Matricular
              </NavLink>
        </button>
        <Header />
      </div>

      {/* Botão do menu mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-500 hover:bg-blue-50 focus:outline-none"
        >
          {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-blue-500 hover:bg-blue-50"
            >
              Início
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-blue-500 hover:bg-blue-50"
            >
              Sobre Nós
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-blue-500 hover:bg-blue-50"
            >
              Serviços
            </NavLink>
            <NavLink
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-blue-500 hover:bg-blue-50"
            >
              Login Encarregado
            </NavLink>
            <NavLink
              to="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-blue-500 hover:bg-blue-50"
            >
              Área Administrativa
            </NavLink>
            <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Inscrever Criança
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

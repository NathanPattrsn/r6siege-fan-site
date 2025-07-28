import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 flex justify-center space-x-10 py-5 font-r6s fixed w-full top-0 z-20">
      <ul className="flex space-x-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-r6sWhite underline decoration-r6sRed decoration-2"
                : "text-r6sRed hover:text-r6sWhite hover:underline decoration-r6sRed"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maps"
            className={({ isActive }) =>
              isActive
                ? "text-r6sWhite underline decoration-r6sRed decoration-2"
                : "text-r6sRed hover:text-r6sWhite hover:underline decoration-r6sRed"
            }
          >
            Maps
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/operators"
            className={({ isActive }) =>
              isActive
                ? "text-r6sWhite underline decoration-r6sRed decoration-2"
                : "text-r6sRed hover:text-r6sWhite hover:underline decoration-r6sRed"
            }
          >
            Operators
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

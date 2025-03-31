// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [showMenu, setShowmenu] = useState(true);
//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
//       <span className="text-xl font-bold tracking-wide">Portfolio</span>

//       <ul
//         className={`${
//           menu ? "block" : "hidden"
//         }    
//          fixed top-19 right-16 bg-transparent bg-opacity-80 flex-col items-center justify-center text-center md:static md:flex md:flex-row md:bg-transparent md:w-auto gap-6`
//          }
//       >
//         <a href="#About">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             About
//           </li>
//         </a>
//         <a href="#Experience">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Experience
//           </li>
//         </a>
//         <a href="#Projects">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Projects
//           </li>
//         </a>
//         <a href="#Footer">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Contact
//           </li>
//         </a>
//       </ul>
//       {showMenu ? (
//         <RiMenu2Line
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all z-50 duration-300"
//           onClick={() => {
//             setMenu(!menu);
//             setShowmenu(!showMenu);
//           }}
//         />
//       ) : (
//         <RiCloseLine
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setMenu(false);
    setShowMenu(true);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }    
         fixed top-19 right-16 bg-transparent bg-opacity-80 flex-col items-center justify-center text-center md:static md:flex md:flex-row md:bg-transparent md:w-auto gap-6`}
      >
        <a href="#About" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all z-50 duration-300"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={closeMenu} // Add onClick handler here
        />
      )}
    </nav>
  );
};

export default Navbar;
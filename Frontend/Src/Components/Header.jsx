// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center">
//             <span className="text-2xl font-bold text-gray-800">Pack<span className="text-blue-600">Pro</span></span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//             >
//               Home
//             </NavLink>
//             <NavLink 
//               to="/products" 
//               className={({ isActive }) => `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//             >
//               Products
//             </NavLink>
//             <NavLink 
//               to="/about" 
//               className={({ isActive }) => `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//             >
//               About
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               className={({ isActive }) => `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//             >
//               Contact
//             </NavLink>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
//           <div className="flex flex-col space-y-3">
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </NavLink>
//             <NavLink 
//               to="/products" 
//               className={({ isActive }) => `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Products
//             </NavLink>
//             <NavLink 
//               to="/about" 
//               className={({ isActive }) => `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               className={({ isActive }) => `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;  // Changed from named export to default export

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Contact', href: 'contact', current: false },
  { name: 'About', href: 'about', current: false },
  { name: 'ProductDetail', href: 'productdetail', current: false },
 { name: 'Products', href: 'products', current: false },
 { name: 'RequestQuote', href: 'requestquote', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Boma Packaging"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?condigo&shade=500lor=i"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

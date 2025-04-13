import React, { useState } from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';

const navigationLinks = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
  

const Navbar = () => {

    const  [open, setOpen] = useState(false) 


    return (
  <nav className='flex justify-between mx-10'>
   <span className='flex' onClick={()=> setOpen(!open)}>
    <Menu className='md:hidden'></Menu>
    {/* <X /> */}
    
   <h2>My Navbar</h2>
   </span >

        {
            open ? 'open' : 'close'
        }

    <ul className='flex'>
        {
           navigationLinks.map(route => <Link key={route.id}  route={route}></Link>)
        }
    </ul>


    {/* <ul className='flex '>
    <li><a href="/home">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/about">About</a></li>
    </ul> */}
    <button>Sign In</button>
  </nav>
    );
};

export default Navbar
;
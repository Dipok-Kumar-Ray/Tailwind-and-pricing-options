import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 mt-9">
      <span className="flex" onClick={() => setOpen(!open)}>

        {

        open ? (<X className="md:hidden"></X>) : (<Menu className="md:hidden"></Menu>)

        }

        <ul className={`md:hidden absolute duration-1000
          ${open ? 'top-8' : '-top-40'}
           bg-amber-100`}>
          
          {links}
          
          </ul>

        <h2>My Navbar</h2>
      </span>

      <ul className="hidden md:flex">{links}</ul>

      {/* <ul className='flex '>
    <li><a href="/home">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/about">About</a></li>
    </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;

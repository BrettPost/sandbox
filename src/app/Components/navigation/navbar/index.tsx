'use client'
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface NavigationItem {
  id: number;
  name: string;
  href: string;
  current: boolean;
}

const navigationItems: NavigationItem[] = [
  { id: 1, name: 'About', href: '/about', current: false },
  { id: 2, name: 'Map', href: '/map', current: false },
  { id: 3, name: 'Calendar', href: '/calendar', current: false },
  { id: 4, name: 'Projects', href: '/projects', current: false },
  { id: 5, name: 'Profile', href: '/profile', current: false }
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

// returns a new nav bar link
const NavListItem = (props: {navItem : NavigationItem, path : string}) => {

  return (
    <li className="nav-item">
      <Link className={"[&.active]:text-black [&.active]:bg-teal-50 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug rounded text-white hover:opacity-75 active:bg-teal-50 active:text-black " + (props.path == props.navItem.href ? "active" : "")}
        href={props.navItem.href}
      >
        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{props.navItem.name}</span>
      </Link>
    </li>
  )
}

export default function Navbar() {
  const pathName = usePathname();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Logo />
              SandBox
            </a>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navigationItems.map((navigationItem) => <NavListItem key={navigationItem.id} navItem={navigationItem} path={pathName}/>)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
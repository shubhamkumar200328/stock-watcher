import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/assets/images/swLogo.png';
import NavItems from './NavItems';
import UserDropdown from './UserDropdown';

function Header() {
  return (
    <header className="sticky top-0 bg-green-800 z-10">
      <div className="container header-wrapper">
        <Link
          href="/"
          className=" text-black flex justify-center items-center "
        >
          <Image
            src={logo}
            alt="stock-watcher logo"
            width={140}
            height={50}
            className="h-10 w-auto cursor-pointer py-0"
          />
          <span className=" text-2xl mt-1 font-bold font-serif">
            Stock-Watcher
          </span>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
}

export default Header;

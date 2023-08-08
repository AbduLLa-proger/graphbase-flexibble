'use client';

import { useState, useMemo } from 'react';
import { INavLinks, NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const session = {};
  const [navBarLinks, setNavBarLinks] = useState<React.JSX.Element[]>([]);

  const navLinksArray = NavLinks.map((link: INavLinks) => (
    <Link href={link.href} key={link.key}>
      {link.text}
    </Link>
  ));

  useMemo(() => {
    const navLinksArray = NavLinks.map((link: INavLinks) => (
      <Link href={link.href} key={link.key}>
        {link.text}
      </Link>
    ));
    setNavBarLinks(navLinksArray);
  }, [NavLinks]);

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="flexibble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">{navBarLinks}</ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto <Link href="/create-project"> Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

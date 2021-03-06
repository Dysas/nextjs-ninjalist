import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={128} height={77} />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja Listing</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

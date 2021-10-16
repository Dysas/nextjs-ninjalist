import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Amet do nulla nulla labore aute quis eiusmod nisi. Elit pariatur eiusmod culpa enim. Consequat in incididunt
        esse excepteur nulla pariatur nostrud sit minim enim reprehenderit labore in.
      </p>
      <p>
        Amet do nulla nulla labore aute quis eiusmod nisi. Elit pariatur eiusmod culpa enim. Consequat in incididunt
        esse excepteur nulla pariatur nostrud sit minim enim reprehenderit labore in.
      </p>
      <Link href="ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}

export default Home;

import React from 'react';

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((ninja) => ({
    params: { id: ninja.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default Details;

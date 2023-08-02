// pages/index.js
import React from 'react';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1, // Page will attempt regeneration every 1 second
  };
}

function Page({ data }) {
  // Render data...
  return (
    <div>
      <h1>Sample Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Page;

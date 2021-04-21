import React from 'react';

function Home({ episodes }) {
  return (
    <div>
      {episodes.map(
        ({
          id,
          title,
          members,
          published_at,
          thumbnail,
          description,
          file,
        }) => (
          <div>
            <p> {id} </p>
            <p> {title} </p>
            <p> {members} </p>
            <p> {published_at} </p>
            <p> {thumbnail} </p>
            <p> {description} </p>
            <p> {file.url} </p>
            <p> {file.type} </p>
            <p> {file.duration} </p>
          </div>
        )
      )}
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

import React from 'react';

import Card from '../../components/card/card.component';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context.api';

const Home = () => {
  const { postLists, deletePost } = useContext(GlobalContext);
  return (
    <div className='home-page'>
      {postLists ? (
        postLists.map((item) => (
          <Card key={item.id} data={item} deletePost={deletePost} />
        ))
      ) : (
        <h1
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'grey',
            marginTop: '10rem',
          }}
        >
          No blog created
        </h1>
      )}
    </div>
  );
};

export default Home;

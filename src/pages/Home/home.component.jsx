import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// import { db } from '../../firebase.config';
import Card from '../../components/card/card.component';
// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context.api';

const Home = () => {
  const { postLists, deletePost } = useContext(GlobalContext);
  return (
    <div className='home-page'>
      {postLists.map((item) => (
        <Card key={item.id} data={item} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default Home;

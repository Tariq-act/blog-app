import React from 'react';

import './card.styles.css';

const Card = ({ data, deletePost }) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-title'>
          <h1>{data.title}</h1>
          <button
            className='btn btn-delete'
            onClick={() => deletePost(data.id)}
          >
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
        <h3 className='card-type'>{data.blogType}</h3>
        <p className='post-content'>{data.postText}</p>
      </div>
    </div>
  );
};

export default Card;

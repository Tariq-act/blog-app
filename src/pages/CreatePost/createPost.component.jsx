import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context.api';

import './createPost.styles.css';

const CreatePost = () => {
  const {
    title,
    postText,
    blogType,
    handleTitle,
    handlePostText,
    handleBlogType,
    createPost,
  } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !postText || !blogType) {
      return;
    }
    createPost();
  };

  return (
    <div className='create-post'>
      <div className='create-post-container'>
        <h1>Create a blog</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>Title: </label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='type'>Select Type: </label>
            <select
              name='type'
              id='type'
              value={blogType}
              onChange={handleBlogType}
            >
              <option value='#'>select</option>
              <option value='tech'>Tech</option>
              <option value='entertainment'>Entertainment</option>
              <option value='community'>Community</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='post'>Post: </label>
            <textarea
              name='post'
              id='post'
              value={postText}
              onChange={handlePostText}
            />
          </div>
          <button className='btn' type='submit'>
            Submit
          </button>{' '}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

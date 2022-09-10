import { createContext, useState, useEffect } from 'react';

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const initialState = {
  postLists: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [blogType, setBlogType] = useState('');
  const [postLists, setPostLists] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [type, setType] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlePostText = (e) => {
    setPostText(e.target.value);
  };
  const handleBlogType = (e) => {
    setBlogType(e.target.value);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const postsCollectionsRef = collection(db, 'posts');

  const createPost = async () => {
    await addDoc(postsCollectionsRef, { title, blogType, postText });
    setTitle('');
    setPostText('');
    setBlogType('');
    navigate('/');
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionsRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    navigate('/');
  };

  // ApplyFilter
  const applyFilter = () => {
    let updatedList = postLists;
    // search filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }
    // console.log(updatedList);

    // Type Filter
    if (type) {
      updatedList = updatedList.filter((item) => item.blogType === type);
    }

    setPostLists(updatedList);
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line
  });

  return (
    <GlobalContext.Provider
      value={{
        title,
        postText,
        blogType,
        inputSearch,
        type,
        handleTitle,
        handlePostText,
        handleBlogType,
        handleSearch,
        handleType,
        createPost,
        postLists,
        deletePost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

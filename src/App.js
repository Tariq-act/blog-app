import Navigation from './components/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.component';
import CreatePost from './pages/CreatePost/createPost.component';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

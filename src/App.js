// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home'
import About from './pages/about/About'
import Posts from './pages/posts/Posts';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Posts' element={<Posts/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
    
  );
}


export default App;

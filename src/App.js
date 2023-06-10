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
import Login from './pages/login/Login'
import Register from './pages/register/Register'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
    
  );
}


export default App;

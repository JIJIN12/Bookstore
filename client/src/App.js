import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Homepage from './page/Homepage';
// import Book from './components/Book';
// import Bookpage from './page/Bookpage';
import Login from './components/Login';
import Nav from './components/Nav';
import Navtop from './components/Navtop';
import Navbottom from './components/Navbottom';
import Loginpage from './page/Loginpage';
import Homer from './components/Homer';
import Register from './components/Register';
import Registerpage from './page/Registerpage';
import ArrivalB from './components/ArrivalB';
import Arrivalpage from './page/Arrivalpage';
import BookB from './components/BookB';
import BookBpage from './page/BookBpage';
import FeaturedB from './components/FeaturedB';
import Featuredpage from './page/Featuredpage';
import Addbook from './components/Addbook';
import Addbookpage from './page/Addbookpage';
import Favourite from './components/Favourite';
import Favpage from './page/Favpage';
import Bookpdf from './components/Bookpdf';
import Profle from './components/Profle';
import Profilepage from './page/Profilepage';
import Author from './components/Author';
import Addauthor from './components/Addauthor';
import Authorpage from './page/Authorpage';
import Addauthorpage from './page/Addauthorpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/bookcompo' element={<Book />} /> */}
        <Route path='/nav' element={<Nav />} />
        <Route path='/logincompo' element={<Login />} />
        <Route path='/registercompo' element={<Register />} />
        <Route path='/navtop' element={<Navtop />} />
        <Route path='/navbottom' element={<Navbottom />} />
        <Route path='/homer' element={<Homer />} />
        <Route path='/arrivalcompo' element={<ArrivalB />} />
        <Route path='/BookBcompo' element={<BookB />} />
        <Route path='/authorcompo' element={<Author />} />
        <Route path='/featuredcompo' element={<FeaturedB />} />
        <Route path='/addbookcompo' element={<Addbook />} />
        <Route path='/addauthorcompo' element={<Addauthor />} />
        <Route path='/favcompo' element={<Favourite/>} />
        <Route path='/pdf' element={<Bookpdf/>} />
        <Route path='/profilecompo' element={<Profle/>} />




        






        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/book' element={<BookBpage />} />
        <Route path='/author' element={<Authorpage />} />
        <Route path='/arrival' element={<Arrivalpage />} />
        <Route path='/featured' element={<Featuredpage />} />
        <Route path='/book/addbook' element={<Addbookpage />} />
        <Route path='/author/addauthor' element={<Addauthorpage />} />
        <Route path='/book/favourite' element={<Favpage />} />
        <Route path='profile' element={<Profilepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mapping from './Mapping';
import Login from './components/forms/Login';
import Courses from './components/Courses';
import Blogs from '../src/components/Blogs'
import NewsLetter from './components/NewsLetter';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mapping />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='/newsletter' element={<NewsLetter />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/courses' element={<Courses />} ></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

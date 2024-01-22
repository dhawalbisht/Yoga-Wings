
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mapping from './Mapping';
import Login from './components/forms/Login';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mapping />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

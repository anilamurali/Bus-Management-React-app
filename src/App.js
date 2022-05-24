import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbus from './Component/Addbus';
import Searchbus from './Component/Searchbus';
import Viewbus from './Component/Viewbus';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addbus/>}/>
      <Route path='/search' exact element={<Searchbus/>}/>
      <Route path='/view' exact element={<Viewbus/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

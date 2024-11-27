
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import Routes
import Header from './template/Header';
import Addproduct from './product/Addproduct';
import Viewproduct from './product/Viewproduct';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='background'>
        <Routes>  
          <Route path='add' element={<Addproduct />} />
          <Route path='view' element={<Viewproduct />} />
        </Routes>
</div>

      </BrowserRouter>
    </div>
  );
}

export default App;

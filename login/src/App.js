
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import About from './components/About';
import Setting from './components/Setting';

function App() {

 
  

  

  

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/signup' element={<Registration/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/setting' element={<Setting/>}/>
        
      </Routes>
    
    
      
    </BrowserRouter>
  );
}

export default App;

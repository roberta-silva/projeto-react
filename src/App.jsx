import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Componentes/Produtos';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Contato from './Componentes/Contato';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <div className='content'>

        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

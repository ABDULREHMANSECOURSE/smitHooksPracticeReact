import React from 'react';
import Home from './pages/home';
import UseState from './pages/useState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseState />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
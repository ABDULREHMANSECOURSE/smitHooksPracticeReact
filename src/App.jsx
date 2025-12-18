import React from 'react';
import Home from './pages/home';
import UseState from './pages/hooks/useState';
import UseEffect from './pages/hooks/useEffect';
import UseReducer from './pages/hooks/useReducer';
import UseRef from './pages/hooks/useRef';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseState />} />
          <Route path='/useEffect' element={<UseEffect />} />
          <Route path='/useReducer' element={<UseReducer />} />
          <Route path='/useRef' element={<UseRef />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
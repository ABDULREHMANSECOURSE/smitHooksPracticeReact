import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';

import UseState from './pages/hooks/useState';
import UseEffect from './pages/hooks/useEffect';
import UseReducer from './pages/hooks/useReducer';
import UseRef from './pages/hooks/useRef';
import UseMemo from './pages/hooks/useMemo';
import UseContext from './pages/hooks/useContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseState />} />
          <Route path='/useEffect' element={<UseEffect />} />
          <Route path='/useReducer' element={<UseReducer />} />
          <Route path='/useMemo' element={<UseMemo />} />
          <Route path='/useRef' element={<UseRef />} />
          <Route path='/useContext' element={<UseContext />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
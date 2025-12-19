import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  document.title = "Hooks Practice";
  return (
    <>
        <h2>Welcome to the Home Page</h2>
        <button onClick={() => Navigate('/useState')}>useState</button>
        <button onClick={() => Navigate('/useEffect')}>useEffect</button>
        <button onClick={() => Navigate('/useReducer')}>useReducer</button>
        <button onClick={() => Navigate('/useContext')}>useContext</button>
        <button onClick={() => Navigate('/useMemo')}>useMemo</button>
        <button onClick={() => Navigate('/useRef')}>useRef</button>
    </>
  )
}

export default Home
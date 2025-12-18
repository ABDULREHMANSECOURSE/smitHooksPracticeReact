import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
        <h2>Welcome to the Home Page</h2>
        <button onClick={() => Navigate('/useState')}>useState</button>
    </>
  )
}

export default Home
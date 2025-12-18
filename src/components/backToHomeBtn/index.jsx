import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackToHomeBtn = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/')}>Back to Home</button>
  )
}

export default BackToHomeBtn
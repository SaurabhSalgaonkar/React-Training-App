import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <button onClick={() => { navigate('/') }}>Go back to Home</button>
      <div>ContactUs</div>
    </>
  )
}

export default ContactUs;
import React from 'react'
import { useNavigate, Outlet } from 'react-router'

function Hotels() {
const navigate = useNavigate();
  return (
    <>
        <button onClick={() => {navigate('featured', {state: {id: "1234"}})}}>Feature Hotels</button>
        <button>Most Viewed Hotels</button>
        <Outlet />
    </>
    )
}

export default Hotels
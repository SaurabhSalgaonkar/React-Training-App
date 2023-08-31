import React from 'react'
import { useParams } from 'react-router-dom'

function HotelID() {
  const params = useParams();
  console.log(params);
  if(params.hotelid === '1') {
    return (<div>Hotel 1 is rendering</div>)
  }
  return (
    <div>HotelID</div>
  )
}

export default HotelID
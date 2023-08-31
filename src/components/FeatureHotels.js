import React from 'react'
import { useLocation } from 'react-router-dom'

function FeatureHotels() {
  const { pathname, state } = useLocation();
  console.log('My pathname & state is', pathname, state);

  console.log("rendered")
  return (
    <div>FeatureHotels, My is id { state?.id }</div>
  )
}

export default FeatureHotels
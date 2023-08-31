import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
    const params = useParams();
    console.log(params);
  return (
    <div>Category</div>
  )
}

export default Category
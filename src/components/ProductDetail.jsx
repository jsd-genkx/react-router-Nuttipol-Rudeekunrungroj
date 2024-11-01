import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const {id} =useParams();
  return (
    <div>
    <h1>ProductDetail</h1>
    <p>detail of product id : {id}</p>
    
    </div>
  );
}

export default ProductDetail
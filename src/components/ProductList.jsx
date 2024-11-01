import React from 'react'
import { Link } from 'react-router-dom'

const products = [
{id:1 , name: "product 1"},
{id:2 , name: "product 2"},
{id:3 , name: "product 3"},

]

function ProductList() {
  return (
    <div>
<h1> Product List</h1>
<ul>
{products.map((p) =>
(<li key = {p.id}>
   <Link to = {`/products/${p.id}`}>{p.name}</Link> 
    
    </li>)

)

}


</ul>



    </div>
  )
}

export default ProductList
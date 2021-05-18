import React from 'react'

import ProductItem from './ProductItem';

function ProductList(props) {
  const {products} = props;
  return (
    <div className="container">
      <div className="row mb-6">
        {
        products?.length > 0 
          ?
          products.map((product)=>{
            return <ProductItem product={product} key={product.id} />
          })
          : <p>Nu s-au gasit rezultate</p>
        }
      </div> 
    </div>
  )
}

export default ProductList

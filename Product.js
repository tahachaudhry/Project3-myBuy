import React from 'react';
import './Product.css';

function Product({title,image, price}) {
  return (
    <div className='product'>
<div className='productInfo'>
    <p>{title}</p>
    <p className='productPrice'>
        <small>$</small>
        <strong>{price}</strong>
    </p>
    
</div>
<img src={image} alt=''/>
<button>Add to Cart</button>
<button>Sell Similar</button>


    </div>
  )
}

export default Product
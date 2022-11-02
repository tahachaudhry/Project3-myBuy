import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({title,image, price}) {
    const [ {basket}, dispatch] = useStateValue();

    const addtoBasket = () => {
      dispatch ({
        type: 'ADD_TO_BASKET',
        item: {
          image: image,
          title: image,
          price: price,

        },
      });
    };


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
<button onClick={addtoBasket}>Add to Cart</button>
<button>Sell Similar</button>


    </div>
  )
}

export default Product
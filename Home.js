import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
<div className='homeContainer'>
    <img
    className='homeImage' 
    src='https://img.freepik.com/free-vector/online-payment-banner-smartphone-credit-card_107791-2059.jpg?w=1800&t=st=1666992114~exp=1666992714~hmac=66f4c32d1d17fae6530ac3292f609bae5d164f44703ef412cc5ff7b003701272' alt=''/>


<div className='homeRow'>
<Product title='Iphone 14' price={999.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4U3VaPDX7ssssRyDZ17SJ9tRZi-PI52z6EA&usqp=CAU'
/>
<Product title='MacBook Pro' price={1299.99} image='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfKqyQnsuKQ7NWvB23PNqjM8ExnJXBxmkRIWxojTyYfU8qw11wniUAbVtBKN8_Mc4w5gWdwmn_yyF7VUn-KRr-5BlGfRjzLaTuP8NDBP0B&usqp=CAE'
/>
<Product title='Samsung Framed TV' price={1999.99} image='https://www.brandsmartusa.com/images/product/large/20296165.jpg'
/>



</div>


<div className='homeRowTwo'>
<Product/>
<Product/>
<Product/>

</div>

<div className='homeRowThree'>
<Product/>
<Product/>
<Product/>

</div>



</div>


    </div>
  )
}

export default Home
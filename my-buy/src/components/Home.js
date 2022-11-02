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
<Product title='Hamilton Soothie Blender' price={32.99} image='https://media.kohlsimg.com/is/image/kohls/4525689?wid=300&hei=300&op_sharpen=1'/>
<Product title='Cuisinart Coffee Maker' price={99.99} image='https://images.keurig.com/is/image/keurig/K-Elite-Single-Serve-Coffee-Maker_5000359832?fmt=png-alpha'/>

</div>

<div className='homeRowThree'>
<Product title='Air Jordan 4 Retro' price={229.99} image='https://cdn.flightclub.com/2200/TEMPLATE/174409/1.jpg'/>
<Product title='Air Jordan 1 Retro' price={199.99} image='https://cdn.flightclub.com/2200/TEMPLATE/272669/1.jpg'/>
<Product title='Crocs Pollex Clog' price={99.99} image='https://cdn.flightclub.com/750/TEMPLATE/290701/1.jpg'/>


</div>



</div>


    </div>
  )
}

export default Home
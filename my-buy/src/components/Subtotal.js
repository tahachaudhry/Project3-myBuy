
import '../components/Subtotal.css'


function Subtotal () {
    return (
        <div className='subtotal'>
<p> Subtotal <strong>0</strong>
</p>
<small className='subtotalGift'>
    <input type='checkbox'/>This order contains a gift
</small>

<button>Proceed to Checkout</button>
        </div>
    )
    
}



export default Subtotal;
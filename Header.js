import React from 'react'
import './Header.css'
import logo from '../components/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <div className='header' >
    <img src={logo}  className='header__logo' alt=''
        />

<div className='header__search'>
<input
className='header__searchInput' type= 'text'/>
<SearchIcon className='header__searchIcon'/>
    
</div>

<div className='header__nav'>
<div className='headerSignin'>
<span className='headerSigninLineOne'> Hello Guest</span>
<span className='headerSigninLineTwo'>Sign In</span>
</div>

<div className='headerBuy'>
<span className='headerBuyLineOne'> Buy</span>
<span className='headerBuyinLineTwo'>Here</span>

</div>

<div className='headerSell'>
<span className='headerSellLineOne'> Sell</span>
<span className='headerSellinLineTwo'>Here</span>
</div>

<div className='headerBasket'>
    <ShoppingBasketIcon/>
    <span className='headerBasketLineTwo
    headerBasketCount'>0</span>
</div>

</div>


    </div>
  )
}

export default Header
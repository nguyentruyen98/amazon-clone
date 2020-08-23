import React from 'react'
import '../css/header.css'
import Logo from '../logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header__logo' src={Logo} alt="" />
      </Link>
      <div className='header__search'>
        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon'></SearchIcon>
      </div>
      <div className="header__nav">
        <Link className='header__link' to={user && '/login'}>
          <div onClick={login} className="header__option">
            <span className='header__optionLineOne'>Hello, {user?.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link className='header__link' to='/'>
          <div className="header__option">
            <span className='header__optionLineOne'>Retunrs</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link className='header__link' to='/'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className="header__optionBasket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className='header__optionLineTwo header__BasketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>

    </nav>

  )

}

export default Header

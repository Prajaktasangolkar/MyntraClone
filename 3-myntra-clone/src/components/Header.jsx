import React from 'react'
import Images from '../../public/images/myntra_logo.webp'
import { IoPerson } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { GiChainedHeart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const bagItem=useSelector(state=>state.bagItem)
    const wishlist=useSelector(state=>state.wishlist)
  return (
    <>
          <header>
        <div className="logo_container">
            <a href="#"><img className="myntra_home" src={Images} alt="Myntra Home"/> 
            </a>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>

        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoPerson />
                <span className="action_name">Profile</span>
            </div>

            <Link className="action_container" to ='/wishlist'>
            <GiChainedHeart />

                <span className="action_name">Wishlist</span>
                <span className="bag-item-count">{wishlist.length}</span>

            </Link>

            <Link className="action_container" to='/bag'>
            <IoBagHandleSharp/>

                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagItem.length}</span>
            </Link>
        </div>
    </header>
    </>
  )
}

export default Header
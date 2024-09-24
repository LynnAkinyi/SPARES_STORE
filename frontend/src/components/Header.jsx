import React from "react";
import './header.css';
import SearchBox from "../components/SearchBox";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import logo from '../assets/logotransparent.png';

const Header = ({ cartCount }) => { // Receive cartCount as a prop
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Implement search functionality here
    };

    return (
        <div className="header">
            <nav>
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Shop <RxCaretDown className="header-icon" /></a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><SearchBox onSearch={handleSearch} /></li>
                    <li><a href="/wishlist"><MdFavoriteBorder className="header-icon" /></a></li>
                    <li>
                        <a href="/cart">
                            <IoCartOutline className="header-icon" />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Display cart count */}
                        </a>
                    </li>
                    <li><a href="/profile"><FiUser className="header-icon" /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

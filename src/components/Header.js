import React from 'react'
import { MY_HOTEL_NAME, NAV_HOME, NAV_HOTELS, NAV_CONTACT_US, HOTEL_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-logo'>
            <img className='logo' src={HOTEL_LOGO}></img>
            <div className='hotel-log' style={{ color: "#b7008d", padding: "5px", marginLeft: "5px" }}>{MY_HOTEL_NAME}</div>
        </div>
        <div className='nav-container'>
            <div className='nav-list'>
                <ul>
                    <li><Link to="/">{NAV_HOME}</Link></li>
                    <li><Link to="Hotels">{NAV_HOTELS}</Link></li>
                    <li><Link to="Contact">{NAV_CONTACT_US}</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
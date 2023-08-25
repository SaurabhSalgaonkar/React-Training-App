import React from 'react'
import { MY_HOTEL_NAME, NAV_HOME, NAV_HOTELS, NAV_CONTACT_US, HOTEL_LOGO } from '../utils/constants'

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
                    <li>{NAV_HOME}</li>
                    <li>{NAV_HOTELS}</li>
                    <li>{NAV_CONTACT_US}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
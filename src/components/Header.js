import React from 'react'


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-logo'>
            <img className='logo' src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"></img>
            <div className='hotel-log' style={{ color: "#b7008d", padding: "5px", marginLeft: "5px" }}>Saurabh's Hotel Chain</div>
        </div>
        <div className='nav-container'>
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>Hotels</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
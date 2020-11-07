import React from 'react'
import {Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function Header () {
    return (
        <div id="header">
            {/* <Favicon className= "fas fa-home" id="header"></Favicon> */}
            <FaHome className='App-logo'/>
            <Link to='/'>HOME</Link>
        </div>
    )
}
export default Header
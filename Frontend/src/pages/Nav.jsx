import { Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import '../css/nav.css'

export default function Nav() {
  return (
   
    <div>
            <div className="nav-component">
                <div className="nav-items">
                    <div className="title"><Link to="/"><p>ElderHub</p></Link><img src='social-care.png' className="images" /></div>
                    <div className="icon">
                        <Link to='/' ><div className="icon_text"><p>Home</p></div></Link>
                        <Link to='/aboutus' ><div className="icon_text"><p>About Us</p></div></Link>
                        <Link to='/donate' ><div className="icon_textx"><span><p>Donate</p></span></div></Link>
                    </div>

                    <div className="log">
                    <div className="iconz">
                       
                
                        <Link to='/JoinAshram' ><div className="icon_textp flex"><p className='text-custom-green jjk'>Join Now</p></div></Link>
                       
                    </div>
                        {/* <Link to='/login' className="loginp"><p>Login?</p></Link> */}
                    </div>

                </div>

            </div>

        </div>

  )
}

import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            const { href, text, id } = link
            return (
              <li>
                <a href={href} className='nav-link' rel='noreferrer' key={id}>
                  {' '}
                  {text}{' '}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { href, icon, id } = link
            return (
              <li>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                  key={id}
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

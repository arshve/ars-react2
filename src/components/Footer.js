import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { href, text, id } = link
          return (
            <li>
              <a href={href} className='footer-link' key={id}>
                {' '}
                {text}{' '}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { href, icon, id } = link
          return (
            <li>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
                key={id}
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer

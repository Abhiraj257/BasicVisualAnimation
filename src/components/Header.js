import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { NavLink, withRouter } from 'react-router-dom'

import { ReactComponent as UpArrow } from '../assets/up-arrow.svg'

const Header = props => {
  const [menuState, setMenuState] = useState({ menuOpen: false })
  const tl = gsap.timeline()
  const height = window.innerHeight
  useEffect(() => {
    props.history.listen(() => setMenuState({ menuOpen: false }))
    if (menuState.menuOpen) {
      // CODE FOR OPEN MEN
      gsap.to('nav', { css: { display: 'block' } })
      gsap.to('body', { css: { overflow: 'hidden' } })
      tl.to('.App', {
        duration: 1,
        y: (height / 3) * 2,
        ease: 'expo.inOut'
      })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut'
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5
          }
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20
          }
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18
          }
        })
        .to('#circle', 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0
          },
          ease: 'expo.inOut'
        })
        .to('.hamburger-menu-close', 0.6, {
          delay: -0.8,
          css: { display: 'block' }
        })
    } else {
      // CODE FOR CLOSED MENU
      tl.to('.App', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut'
      })
        .to('#circle', 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227
          }
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10
          }
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10
          }
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40
          }
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut'
        })
        .to('.hamburger-menu-close', {
          duration: 0.01,
          display: 'none'
        })
        .to('body', { css: { overflow: 'auto' } })
        .to('nav', { css: { display: 'none' } })
    }
  })
  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/'>Agency.</NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpen: true })}
              className='hamburger-menu'>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpen: false })}
              className='hamburger-menu-close'>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)

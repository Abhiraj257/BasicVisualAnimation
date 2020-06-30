import React, { useEffect } from 'react'
import gsap from 'gsap'

import './styles/App.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import Cases from './components/Cases'
import IntroOverlay from './components/introOverlay'

function App() {
  useEffect(() => {
    // let vh = window.innerHeight * 0.01
    // document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to('body', 0, { css: { visibility: 'visible' } })

    const tl = gsap.timeline()

    tl.from('.line span', 1.8, {
      skewY: 7,
      y: 70,
      stagger: {
        amount: 0.3
      },
      ease: 'power4.out'
    })
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: {
          amount: 0.4
        }
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        stagger: {
          amount: 0.4
        },
        delay: -0.8
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        stagger: {
          amount: 0.4
        },
        delay: -2,
        ease: 'expo.inOut'
      })
  })

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}

export default App

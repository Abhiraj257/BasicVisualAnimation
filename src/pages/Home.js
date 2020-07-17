import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import IntroOverlay from '../components/introOverlay'
import Banner from '../components/Banner'
import Cases from '../components/Cases'

const Home = () => {
  const [animation, setAnimation] = useState(false)

  const homeAnimation = animationComplete => {
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
        ease: 'expo.inOut',
        onComplete: animationComplete
      })
  }

  const animationComplete = () => {
    setAnimation(true)
  }

  useEffect(() => {
    homeAnimation(animationComplete)
  }, [])

  return (
    <>
      {!animation ? <IntroOverlay /> : null}

      <Banner />
      <Cases />
    </>
  )
}

export default Home

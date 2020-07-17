import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Route } from 'react-router-dom'

import './styles/App.scss'
import Header from './components/Header'
import CaseStudies from './pages/caseStudies'
import Approach from './pages/approach'
import About from './pages/about'
import Services from './pages/services'

import Home from './pages/Home'
import Navigation from './components/Navigation'

const Routes = [
  { path: '/', comp: Home },
  { path: '/case-studies', comp: CaseStudies },
  { path: '/about-us', comp: About },
  { path: '/approach', comp: Approach },
  { path: '/services', comp: Services }
]

function App() {
  useEffect(() => {
    // let vh = window.innerHeight * 0.01
    // document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to('body', 0.01, { css: { visibility: 'visible' } })
  })

  return (
    <>
      <Header />
      <div className='App'>
        {Routes.map(route => (
          <Route
            exact
            path={route.path}
            component={route.comp}
            key={route.path}
          />
        ))}
      </div>
      <Navigation />
    </>
  )
}

export default App

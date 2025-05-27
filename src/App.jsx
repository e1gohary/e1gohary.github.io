import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Header from './header'
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;

  let handleAppClicks = e => {}
  return (
    <div className="App" onClick={handleAppClicks}>
      <Router>
        <Routes>
        <Route path='/' element={<Header isMobile={isMobile} />} />

        </Routes>
        

      </Router>

    </div>
  )
}


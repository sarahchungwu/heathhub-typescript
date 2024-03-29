import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefit from '@/scenes/benefit'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import OurClasses from './scenes/ourClasses'
import ContactUs from './scenes/contactUs'
import Footer from './scenes/footer'

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScoll)
    return () => window.removeEventListener('scroll', handleScoll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefit setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App

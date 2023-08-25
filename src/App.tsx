import Navbar from '@/scenes/navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'

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
    </div>
  )
}

export default App

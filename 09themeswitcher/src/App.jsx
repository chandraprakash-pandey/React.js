import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'

function App() {
  const [themeMode,setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }
  
  // Actuall change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
  <ThemeProider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap items-center min-h-screen">
    <div className="w-full">
      <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
        <ThemeBtn />
      </div>
      
      <div className="w-full max-w-sm mx-auto">
        <Card />
      </div>
    </div>
    </div>
  </ThemeProider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let Myarr = [1,2,3]
  let Userinfo = {
    name: "Pandey",
    id: 123
  }

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    {/* <Card Username="Pandey" myarr = {Userinfo}/> */}
    <Card username = "Pandey" btnText = "Click Me"/>
    <Card username="Chandraprakash"/>

    </>
  )
}

export default App

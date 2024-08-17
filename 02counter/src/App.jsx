import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 15

  let [count, setCount] = useState(15)

  const addValue = () => {
    // count = count + 1
    // setCount(count+1) // We can also do like count += 1 and just put count in parinthesis
    // if(count<20) setCount(count+1)
    setCount(prevCount => prevCount + 1 )
    setCount(prevCount => prevCount + 1 )
    setCount(prevCount => prevCount + 1 )
    setCount(prevCount => prevCount + 1 )

  }

  const subValue = () => {
    if(count>0) setCount(count-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Increase Count</button>
      <br />
      <button onClick={subValue}>Decrease Count</button>
      <p>Count :{count}</p>
    </>
  )
}

export default App

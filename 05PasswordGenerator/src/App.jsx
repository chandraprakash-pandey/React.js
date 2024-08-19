import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (length) str += "0123456789"
    if(character) str += "`~!@#$%^&*"

    for(let i = 1; i<= length ;  i++){
      let char = Math.floor(Math.random() *str.length)
      pass += str[char]
    }

    setpassword(pass)
    
  }, [length, number, character, setpassword])
  
  useEffect(() => {
    passGenerator()
  }, [length,number,setpassword,character])
  return (
    <>
    <div className='bg-slate-300 w-75% text-orange-500 text-2xl font-medium rounded-lg px-4 py-4'>
      <h1>Password Generator</h1>
      <input 
      value={password}
      className='w-3/4 px-4 my-5 outline-none cursor-pointer rounded-s-xl'
      placeholder='Password'
      readOnly
      type="text" />
      <button className='px-3 text-white bg-blue-400 rounded-e-xl'>Copy</button>
      <div className='flex justify-center gap-5 px-5'>
        <div>
        <input
        type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        </div>
        
        <div>
        <input
        type="checkbox"
        id='checked'
        defaultChecked = {number}
        onChange={() => {
          setnumber((prev) => !prev)
        }}
        />
        <label htmlFor="checked">Number</label>
        </div>
        
        <div>
        <input
        type="checkbox"
        id='checked1'
        defaultChecked = {character}
        onChange={() => {
          setcharacter((prev) => !prev)
        }}
        />
        <label htmlFor="checked1">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

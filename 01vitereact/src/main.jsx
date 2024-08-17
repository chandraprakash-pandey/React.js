import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp(){
  return(
    <div>
      <h1>This is coustom function</h1>
    </div>
  )
}

const myElement = (
  <a href="https://google.com">CLick here to visit Google.</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a', // Give Tag
  {href: 'https://google.com', target: '_black'}, // Give Properties
  'Visit Google 2 ', // Give Text
  anotherUser
)

createRoot(document.getElementById('root')).render(
    // myElement
    reactElement
    // <App />
)

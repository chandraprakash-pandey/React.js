import { useState } from "react"

function App() {
  const [color, setcolor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center w-full px-4 bottom-12">
        <div className="flex flex-wrap gap-3 px-3 py-2 bg-white rounded-xl">
          <button 
          onClick={() => setcolor("red")}
          className="px-4 py-1 text-white rounded-full outline-none "
          style={{backgroundColor: "red"}}
          >RED</button>
          <button 
          onClick={() => setcolor("green")}
          className="px-4 py-1 text-white rounded-full outline-none "
          style={{backgroundColor: "green"}}
          >Green</button>
          <button 
          onClick={() => setcolor("blue")}
          className="px-4 py-1 text-white rounded-full outline-none "
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App

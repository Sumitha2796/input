import React, { useState } from "react"

const Content = () => {
  let [input, setInput] = useState("")
  let [items, setItems] = useState([])
  let handleInput = (event) => {
    setInput(event.target.value)
  }
  let handleButton = () => {
    if (input.trim()) {
      setItems((previnput) => {
        return [...previnput, input]
      })
      setInput(" ")
    }
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleButton} style={{ backgroundColor: "lightblue" }}>
        Add
      </button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Content

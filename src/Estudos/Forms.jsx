import { useState } from "react"


const Forms = () => {

    const [text, setText] = useState('')

    const HandleFuncion = (e) => {
        setText(e.target.value)
    }


  return (
    <div>
      <h2>Artur santana</h2>
      <h3>{text}</h3>
      <input type="text" name="text" onChange={HandleFuncion} />
    </div>
  )
}

export default Forms

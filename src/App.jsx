import { useEffect } from "react"
import { useState } from "react"

  
  const App = () => {
    const [count, setCount] = useState(0)
    const [artur, setArtur] = useState(0)

    useEffect(()=> {
console.log('Renderizado uma vez')
    },[count])


    useEffect(() => {
      setTimeout(() => {
        const time = () => {
          alert('deu certo')
        }
        time()
      }, 2000);
    }, [artur])
    


    return (
      <div>
        
       <p>{count}</p>
       <button onClick={()=>{setCount(count+1)}}>hello</button>
    

      <p>{artur}</p>
      <button onClick={()=>{setArtur(artur+1)}}>helloB</button>

</div>
    )
  }
  
  export default App
  

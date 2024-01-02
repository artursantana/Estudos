import { useEffect } from "react"
import { useState } from "react"

  
  const App = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])

    useEffect(()=> {
console.log('Renderizado uma vez')
    },[count])


    useEffect(()=> {
       fetch('https://api.github.com/users/jorgefperes/repos')
       .then((res) => res.json())
       .then((data) => setData(data))

    },[])
    console.log(data)
    


    return (
      <div>
        
       <p>{count}</p>
       <button onClick={()=>{setCount(count+1)}}>hello</button>
           <p>{
           data.map((e) => 
            <div key={e.id}>{e.id} - {e.full_name}</div>
           )
           }</p>

</div>
    )
  }
  
  export default App
  

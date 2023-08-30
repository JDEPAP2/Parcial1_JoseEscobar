import { useState } from 'react'

const Componente2 = () => {
    const [num, setNum] = useState(0)
    const [res, setRes] = useState()

    const calcular = ()=>{
        var val = 100
        if(num >= 3){
            for(let i = 4; i <= num; i++){
                val += 50
            }
        }
        setNum(0)
        setRes(`Se deben pagar $${val}`)
        console.log(res)
    }
    return (
      <div className='content'>
        <h1>Valor a Pagar por Llamada</h1>
        <p>Digite el numero de minutos que duro la llamada</p>
        <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={calcular}>Calcular</button>
        <h4>{res}</h4>
      </div>
    )
}

export default Componente2

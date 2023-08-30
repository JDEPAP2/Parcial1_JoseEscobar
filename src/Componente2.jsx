import { useState } from 'react'

const Componente2 = () => {
    const [num, setNum] = useState()
    const [res, setRes] = useState()

    const convertir = ()=>{
        var val = 100
        if(num >= 3){
            for(let i = 4; i <= num; i++){
                val += 50
            }
        }
        setRes(`Se deben pagar ${val}`)
    }
    return (
      <>
        <h1>Valor a Pagar por Llamada</h1>
        <p>Digite el numero de minutos que duro la llamada</p>
        <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={convertir}>Convertir</button>
        <h2>{res}</h2>
      </>
    )
}

export default Componente2

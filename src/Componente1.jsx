import { useState } from 'react'

const Componente1 = () => {
    const [num, setNum] = useState()
    const [res, setRes] = useState()

    const convertir = ()=>{
        var hora = Math.floor(num / 3600)
        var minut = Math.floor((num % 3600)/60)
        var segs = Math.floor(num % 60)
        setRes(`El tiempo es ${hora} horas, ${minut} minutos y ${segs} segundos`)
    }
    return (
      <>
        <h1>Convertir Segundos</h1>
        <p>Digite el numero de segundos que desea convertir</p>
        <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={convertir}>Convertir</button>
        <h2>{res}</h2>
      </>
    )
}

export default Componente1

import { useState } from 'react'

const Componente1 = () => {
    const [num, setNum] = useState(0)
    const [res, setRes] = useState()

    const convertir = ()=>{
        var hora = Math.floor(num / 3600)
        var minut = Math.floor((num % 3600)/60)
        var segs = Math.floor(num % 60)
        setNum(0)
        setRes(`El tiempo es ${hora} horas, ${minut} minutos y ${segs} segundos`)
        console.log(res)
      }
    return (
      <div className='content'>
        <h1>Convertir Segundos</h1>
        <p>Digite el numero de segundos que desea convertir</p>
        <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={convertir}>Convertir</button>
        <h4>{res}</h4>
      </div>
    )
}

export default Componente1

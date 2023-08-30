import { useState } from 'react'

const Componente3 = () => {
    const [num, setNum] = useState()
    const [name, setName] = useState()
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
      <>
        <h1>Saludo</h1>
        <p>Digite su nombre, o el de la persona que quiera</p>
        <input onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <p>Digite la hora sin minutos ni segundos en formato 24 horas</p>
        <input type="number" onChange={(e)=>setName(e.target.value)} value={name}></input>
        <button onClick={convertir}>Convertir</button>
        <h2>{res}</h2>
      </>
    )
}

export default Componente3

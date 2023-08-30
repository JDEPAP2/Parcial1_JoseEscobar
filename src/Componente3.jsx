import { useState } from 'react'

const Componente3 = () => {
    const [num, setNum] = useState(0)
    const [name, setName] = useState()
    const [res, setRes] = useState()

    const saludar = ()=>{
        var intro = (num >= 18 || num < 4)?"Buenos Noches":((num < 12)?"Buenos Días":"Buenas Tardes");
        if(num>24){
          setRes("Digite una hora valida")
        }else if(!name || name?.replace(" ", "").length === 0){
          setRes("Digite un nombre")
        }else{
          setRes(`${intro}, ${name}`)
        }
        console.log(res)
        setNum(0)
        setName("")
        
    }
    return (
      <div className='content'>
        <h1>Saludo</h1>
        <p>Digite su nombre, o el de la persona que quiera</p>
        <input onChange={(e)=>setName(e.target.value)} value={name??""}></input>
        <p>Digite la hora sin minutos ni segundos en formato 24 horas</p>
        <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={saludar}>Saludar</button>
        <h4>{res}</h4>
      </div>
    )
}

export default Componente3

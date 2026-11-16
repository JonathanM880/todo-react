import {type ChangeEvent, useEffect, useState} from "react";

function Contador() {
    const [contador, setContador] = useState(0)

    const [name, setName] = useState("sin Nombre")

    //--hooks

    useEffect(()=>{
        console.log("Componente Montado")
    })

    //--escuchar juntos
    useEffect(()=>{
        console.log(`Contador actualizado ${contador}`)
    },[contador,name])

    useEffect(()=>{
        console.log(`Nombre actualizado ${name}`)
    },[name])

    //--eventos

    const handleUp = ()=>{
        setContador(contador+1)
    }
    const handleDown = ()=>{
        setContador(contador-1)
    }

    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }
    return(
        <>
            <div>Valor {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
            <hr/>

            <div style={{height:"15rem"}} >
                Nombre:
                <input type="text" value={name} onChange={handleChange}/>
                <br/>
                <input type="text" value={name} onChange={evt =>setName(evt.target.value)}/>
                <br/>
                <span> {name}</span>
            </div>
        </>
    )
}

export default Contador;
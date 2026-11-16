import {type ChangeEvent, type FormEvent, useState} from "react";

function MyForm1(){

    const [name,setName] = useState("")
    const [validado,setValidado] = useState(false)

    const handleSubmit= (event:FormEvent<HTMLFormElement>)=>{
        alert("Formulario enviado")
        event.preventDefault()
    }

    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }

    return(
        <>
            <h2>MyForm1</h2>
            <form onSubmit={handleSubmit} action="http://google.com" method="get" target="_blank">

                <div>
                    Nombre: <input type="text" name="nombre" onChange={handleChange}/>
                    <br/>
                    <input
                        type="checkbox"
                        name="check1"
                        checked={validado}
                        onChange={(event) => setValidado(event.target.checked)}
                    />Seleccionado
                </div>
                <input type="submit" value="Enviar formulario BTN1"/>
                <input type="submit" value="Enviar formulario BTN2"/>
                <input type="button" value="Boton mateo" onClick={()=> alert("noooooo")}/>

            </form>

        </>
    )
}

export default MyForm1
import React, { useState } from "react";
import {render} from "react-dom"
import { Botao } from "./components/Botao";
import { Campo } from "./components/Campo";
import "./App.css"

function Botao({texto}) {
    return (
        <button type="button" onClick={() => acao()}>{ texto }</button>
    )
}
function App() {
    const [contador, setContador] = useState(0)
    return (
        <React.Fragment>
        <div class="card">
        <h1>Contador React</h1>  

        <span>Total:  { contador } </span>
        <Campo tipo={"text"} descricao={"Preencha seu nome"}></Campo>         
        <br />
        <Botao texto={"Soma 1"} acao={() => setContador(contador +1)}></Botao>
        <Botao texto={"Tira 1"} acao={() => setContador(contador -1)}></Botao>
        </div>      

        </React.Fragment>
    )
}

render(<App/>, document.getElementById("app"))
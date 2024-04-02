import React, {useState} from "react";
import { AreaHome } from "./styled";
import { useNavigate } from "react-router-dom";
import alert from '../../utils/alert'

const Home = () => {


    const objetoPessoa = {
        nome: "",
        sobrenome: "",
        idade: "",
        cpf: "",
    }
    const navigate = useNavigate();
    const [pessoa, setPessoa] = useState(objetoPessoa);

    const eventChange = (e) => {
        console.log("pessoa.nome")
        const {name, value} = e.target;
        setPessoa({ ...pessoa, [name]: value});
    }

    const aoSubmit = (/*e*/) => {
       // e.preventDefault();
        //document.write(pessoa.nome + "<br/>");
        //document.write(pessoa.sobrenome + "<br/>");
        //document.write(pessoa.idade + "<br/>");
        //document.write(pessoa.cpf)]
        alert('Alert', 'Você tem certeza?')
        navigate("/Cracha", {state: {pessoa}});
        
    }
    return(
    <AreaHome>
    <form>
    <label htmlFor="nome">Nome:</label>
    <input type='text' placeholder='Digite seu nome' name='nome' required={true} onChange={eventChange} />
    <label htmlFor="sobrenome">Sobrenome:</label>
    <input type='text' placeholder='Digite seu sobrenome' name='sobrenome' required={true} onChange={eventChange}/>
    <label htmlFor="idade">Idade:</label>
    <input type='number' placeholder='Digite sua idade' name='idade' required={true} onChange={eventChange}/>
    <label htmlFor="cpf">CPF:</label>
    <input type='text' placeholder="Digite seu cpf" name='cpf' required={true} onChange={eventChange}/><br />
    <button onClick={aoSubmit}>Submit</button>
    </form>
    </AreaHome>
    );
};

export default Home;
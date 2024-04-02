import React from "react";
import { useLocation } from "react-router-dom";
import {AreaPagina, Container, Imagem, Textos} from './styled'

const Cracha = () => {
 const location = useLocation();
 const {pessoa} = location.state;

return(
    <>
     <AreaPagina>
       <Container>
        <Imagem src="/perfil.png" />
        <Textos>
            <h2>Nome: <b>{pessoa.nome}</b></h2>
            <h2>Sobrenome: <b>{pessoa.sobrenome}</b></h2>
            <h2>Idade: <b>{pessoa.idade}</b></h2>
            <h2>CPF: <b>{pessoa.cpf}</b></h2>
        </Textos>
       </Container>
     </AreaPagina>
    </>
);

}

export default Cracha;
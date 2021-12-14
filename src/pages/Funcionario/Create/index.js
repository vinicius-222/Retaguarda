import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import { AreaTopo, Line, ButtonPadrao} from '../../../components/MainComponents';
import LinkGoBack from '../../../components/LinkGoBack'
import DropDown from '../../../components/DropDown';
import TelaCadastroFuncionario from '../../../components/partials/TelaCadastroFuncionario';
import TelaCadastroEndereco from '../../../components/partials/TelaCadastroEndereco';
import TelaCadastroContatos from '../../../components/partials/TelaCadastroContatos';
import TelaCadastroLogin from '../../../components/partials/TelaCadastroLogin';

const Create = (props) => {

    const Salvar = (e) => {

        console.log('ok')
    }

    useEffect(()=>{
    },[])

    return(
        <Container>
             <AreaTopo>
                <h1>Cadastro de Funcionario</h1>
               <LinkGoBack url="/Funcionario"/>
            </AreaTopo>
            <DropDown  
                title="Informações Básicas"
                heightOpen={640}
                open={true} 
                source={<TelaCadastroFuncionario tpPessoa="Tipo de Funcionario" />}
            />
            <DropDown  
                title="Endereços"
                open={false} 
                heightOpen={500}
                source={<TelaCadastroEndereco/>}
            />
            <DropDown  
                title="Contatos"
                open={false}
                heightOpen={400}
                source={<TelaCadastroContatos/>}
            />
            <DropDown  
                title="Login"
                open={false}
                heightOpen={400}
                source={<TelaCadastroLogin/>}
            />
            <Line />
        </Container>
    )
}

export default Create;
import React, { useState } from 'react';
import { Container} from './styled';
import { AreaTopo, Line} from '../../../components/MainComponents';
import LinkGoBack from '../../../components/LinkGoBack'
import DropDown from '../../../components/DropDown';
import TelaCadastroPessoa from '../../../components/partials/TelaCadastroPessoa';
import TelaCadastroEndereco from '../../../components/partials/TelaCadastroEndereco';
import TelaCadastroContatos from '../../../components/partials/TelaCadastroContatos';


const Create = (props) => {
    const [Endereco, setEndereco] = useState([]);
    const [Contatos, setContatos] = useState([]);

    const handleClickEndereco = (end, widthTela) => {
        setEndereco(end);
    }

    const handleClickContatos = (contat) => {
        setContatos(contat);
    }

    return(
        <Container>
            <AreaTopo>
                <h1>Cadastro de Clientes</h1>
               <LinkGoBack url="/Clientes"/>
            </AreaTopo>
            <DropDown  
                title="Informações Básicas"
                heightOpen={640}
                open={false} 
                source={<TelaCadastroPessoa tpPessoa="Tipo de Cliente" />}
            />
            <DropDown  
                title="Endereços"
                open={false} 
                heightOpen={500}
                source={<TelaCadastroEndereco endereco={Endereco} onClick={(end, w)=>handleClickEndereco(end, w)}/>}
            />
            <DropDown  
                title="Contatos"
                open={false}
                heightOpen={400}
                source={<TelaCadastroContatos contatos={Contatos} onClick={(e)=>handleClickContatos(e)}/>}
            />
            <Line />
        </Container>
    )
}
export default Create;
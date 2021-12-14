import React from 'react';
import { Container } from './styled';
import { AreaTopo, Line} from '../../../components/MainComponents';
import LinkGoBack from '../../../components/LinkGoBack'
import DropDown from '../../../components/DropDown';
import TelaCadastroPessoa from '../../../components/partials/TelaCadastroPessoa';
import TelaCadastroEndereco from '../../../components/partials/TelaCadastroEndereco';
import TelaCadastroContatos from '../../../components/partials/TelaCadastroContatos';

const Create = (props) => {
    return(
        <Container>
            <AreaTopo>
                <h1>Cadastro de Fornecedor</h1>
               <LinkGoBack url="/Fornecedor"/>
            </AreaTopo>
            <DropDown  
                title="Informações Básicas"
                heightOpen={640}
                open={true} 
                source={<TelaCadastroPessoa tpPessoa="Tipo de Fornecedor" />}
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
            <Line />
        </Container>
    )
}

export default Create;
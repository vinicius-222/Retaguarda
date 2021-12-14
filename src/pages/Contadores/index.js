import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import { Select } from '../../components/MainComponents';
import Table from '../../components/Table';
import ButtonPadrao from '../../components/ButtonPadrao';
import DropDownChoose from '../../components/DropDownChoose';
import SalatoAPI from '../../helpers/SalatoAPI'

const Contadores = (props) =>{
    const api = SalatoAPI();
    const [head, setHead] = useState([
        {'Loja':'Loja', 'width':'20%'},
        {'Contador':'Contador', 'width':'50%'},
        {'E-mail':'E-mail', 'width':''},
        {'Ação':'Ação','width':'40px'}
    ]);
    const [lojas, setLojas] = useState([]);

    const handleCreate = (e) => {
        
    }

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    useEffect(()=>{
        
    },[lojas]) 

    useEffect(()=>{
        getLojas();
    },[])

    return(
        <Container>
            <div className="AreaTopo">
                <h1>Lista de Contadores</h1>
                <div>
                    <ButtonPadrao url="/Contadores/Create" backgroundcolor="#009739" backgroundhover="#026E2B" width={200} height={35} margin="0px 20px" title="CADASTRAR CONTADOR"/>
                    <ButtonPadrao url="/Contadores/Historico" backgroundcolor="#009739" backgroundhover="#026E2B" width={200} height={35} title="ARQUIVOS ENVIADOS"/>
                </div>
            </div>
            <div className="AreaFiltros">
                <div className="AreaFiltros-Campos">
                    <p>Loja(s)</p>
                    <DropDownChoose stTodos={true} list={lojas}/>
                </div>
                <div className="AreaFiltros-Campos">
                    <p>Status</p>
                    <Select width={100}>
                        <option>Ativo</option>
                        <option>Inativo</option>
                    </Select>
                </div>
                <div className="AreaFiltros-Button">
                    <ButtonPadrao height={30} width={190} title="Filtrar"/>
                </div>
            </div>
            <div className="AreaContador">
                <label>
                    Mostrando 
                    <Select width={8} borderHeigth={10}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </Select>
                    registros por páginas
                </label>
            </div>
            <Table head={head}/>
        </Container>
    )
}

export default Contadores;
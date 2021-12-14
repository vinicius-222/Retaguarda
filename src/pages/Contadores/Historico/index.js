import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import { AreaTopo, AreaFiltros, AreaFiltrosCampos, Select, ButtonPadrao} from '../../../components/MainComponents';
import LinkGoBack from '../../../components/LinkGoBack'
import DataPic from '../../../components/DataPic';
import Table from '../../../components/Table';
import DropDownChoose from '../../../components/DropDownChoose';
import SalatoAPI from '../../../helpers/SalatoAPI';

const Historico = () => {
    const api = SalatoAPI();
    const [head, setHead] = useState([
        {'Loja':'Loja', 'width':'20%'},
        {'Contador':'Contador', 'width':'20%'},
        {'Email':'Email', 'width':''},
        {'Loja':'Loja','width':'15%'},
        {'Data Envio':'Data Envio','width':'200px'},
        {'Ação':'Ação','width':'100px'}
    ]);
    const [Lojas, setLojas] = useState([]);

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    useEffect(()=>{
        getLojas();
    },[])

    return(
        <Container>
            <AreaTopo>
                <h1>Histórico de envio de XML para contadores</h1>
                <div className="AreaGoBack">
                    <LinkGoBack url='/Contadores'/>
                </div>
            </AreaTopo>
            <AreaFiltros height={160} align="flex-end">
                <form>
                    <div className="linha">
                        <label className="area areaLarge">
                            <div className="area--title">Lojas(s)</div>
                            <div className="area--input">
                                <DropDownChoose stTodos={true} list={Lojas}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Data Inicial</div>
                            <div className="area--input">
                                <DataPic 
                        
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Data Final</div>
                            <div className="area--input">
                                <DataPic 
                        
                                />
                            </div>
                        </label>
                        <label className="area area--inputloja{">
                            <div className="area--title"><br></br></div>
                            <div className="area--input">
                                <ButtonPadrao margin={1} height={30} backgroundcolor='#000E2D'>Filtrar</ButtonPadrao>
                            </div>
                        </label>
                    </div>
                </form>
            </AreaFiltros>
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

export default Historico;
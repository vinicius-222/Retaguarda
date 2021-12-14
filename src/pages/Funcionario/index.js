import React, { useState, useEffect} from 'react';
import { Container } from './styled';
import { AreaTopo, AreaFiltros, Line, Select} from '../../components/MainComponents';
import ButtonPadrao from '../../components/ButtonPadrao';
import { cpfMask } from '../../components/Mask';
import DropDownChoose from '../../components/DropDownChoose';
import SalatoAPI from '../../helpers/SalatoAPI';
import Table from '../../components/Table';


const Funcionario = (props) =>{
    const api = SalatoAPI();
    const [Cargos, setCargos] = useState([]);
    const [Lojas, setLojas] = useState([]);
    const [Funcionarios, setFuncionarios] = useState([]);
    const [head, setHead] = useState([
        {'Funcionario':'Funcionario', 'width':'30%'},
        {'CPF':'CPF', 'width':'20%'},
        {'Cargo':'Cargo', 'width':''},
        {'Telefone':'Telefone','width':'15%'},
        {'Status':'Status','width':'100px'},
        {'Ação':'Ação','width':'70px'}
    ]);

    const getCargos = async() =>{
        setCargos([]);
        let json = await api.getCargos();
        setCargos(json);
    }

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    const getFuncionario = async()=>{
        setFuncionarios([]);
        let json = await api.getFuncionario();
        setFuncionarios(json);
    }

    useEffect(()=>{
        getCargos();
        getLojas();
        getFuncionario();
    },[])

    return(
        <Container>
           <AreaTopo>
                <h1>Lista de Funcionarios</h1>
                <ButtonPadrao url="/Funcionario/Create" backgroundcolor="#009739" backgroundhover="#026E2B" width={200} height={35} margin="0px 20px" title="CADASTRAR FUNCIONARIO"/>
            </AreaTopo>
            <Line />
            <AreaFiltros align="flex-start" height={180}>
                <form>
                    <div className="linha" height={220} justify="flex-start">
                        <label className="area">
                            <div className="area--title">CPF</div>
                            <div className="area--input">
                                <input />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Cargo</div>
                            <div className="area--input">
                                <DropDownChoose stTodos={true} list={Cargos}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Loja(s)</div>
                            <div className="area--input">
                                <DropDownChoose stTodos={true} list={Lojas}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Status</div>
                            <div className="area--input">
                                <Select width={100} paddingheight={1}>
                                    <option>Ativo</option>
                                    <option>Inativo</option>
                                </Select>
                            </div>
                        </label>
                    </div>
                    <div className="linha">
                        <label className="area areaLarge">
                            <div className="area--title">Funcionario</div>
                            <div className="area--input">
                                <input />
                            </div>
                        </label>
                        <label className="area areaSmall">
                            <div className="area--title"></div>
                            <br></br>
                            <div className="area--input">
                                <ButtonPadrao title="Filtrar"/>
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
            <Table  head={head} registro={Funcionarios}/>
        </Container>
    )
}

export default Funcionario;
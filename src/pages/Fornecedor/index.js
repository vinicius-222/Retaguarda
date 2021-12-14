import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import { AreaTopo, AreaFiltros, AreaFiltrosCampos, Select} from '../../components/MainComponents';
import ButtonPadrao from '../../components/ButtonPadrao';
import Table from '../../components/Table';
import DropDownChoose from '../../components/DropDownChoose';
import SalatoAPI from '../../helpers/SalatoAPI';

const Fornecedor = (props) => {
    const api = SalatoAPI();
    const [head, setHead] = useState([
        {'Nome/Razão Social':'Nome/Razão Social', 'width':'30%'},
        {'Tipo Fornecedor':'Tipo Fornecedor', 'width':'20%'},
        {'CPF/CNPJ':'CPF/CNPJ', 'width':''},
        {'Telefone':'Telefone','width':'15%'},
        {'Status':'Status','width':'100px'},
        {'Ação':'Ação','width':'70px'}
    ]);
    const [lojas, setLojas] = useState([
        {"Nome":"Salato Alimentos Mage", "Status":false},
        {"Nome":"Salato Alimentos Piabeta", "Status":false},
        {"Nome":"Salato Alimentos Teresopolis", "Status":false},
        {"Nome":"Salato Alimentos Petropolis", "Status":false}
    ]);

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
                <h1>Lista de Fornecedores</h1>
                <ButtonPadrao url="/Fornecedor/Create" backgroundcolor="#009739" backgroundhover="#026E2B" width={200} height={35} margin="0px 20px" title="CADASTRAR FORNECEDOR"/>
            </AreaTopo>
            <form>
                <AreaFiltros height={220} align="flex-end">
                    <AreaFiltrosCampos>
                        <p>Fornecedor/Razão Social</p>
                        <input />
                        <p>Loja(s)</p>
                        <DropDownChoose stTodos={true} list={lojas}/>
                    </AreaFiltrosCampos>
                    <AreaFiltrosCampos>
                        <p>CPF/CNPJ</p>
                        <input />
                        <p>Status</p>
                        <Select width={100}>
                            <option>Ativo</option>
                            <option>Inativo</option>
                        </Select>
                    </AreaFiltrosCampos>
                    <AreaFiltrosCampos>
                        <p>Telefone</p>
                        <input />
                        <br></br>
                        <br></br>
                        <div className="AreaBtn">
                            <ButtonPadrao backgroundcolor='#000E2D' title="Filtrar"/>
                        </div>
                    </AreaFiltrosCampos>
                </AreaFiltros>
            </form>
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
            <Table  head={head}/>
        </Container>
    )
}
export default Fornecedor;
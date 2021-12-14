import React, {useState, useEffect} from 'react';
import { Container } from './styled'
import { AreaTopo, AreaFiltros, AreaFiltrosCampos, Select} from '../../components/MainComponents';
import ButtonPadrao from '../../components/ButtonPadrao';
import Table from '../../components/Table';
import DropDownChoose from '../../components/DropDownChoose';
import SalatoAPI from '../../helpers/SalatoAPI'

const Adquirente = (props) => {
    const api = SalatoAPI();
    const [head, setHead] = useState([
        {'Nome/Razão Social':'Nome/Razão Social', 'width':'30%'},
        {'Tipo Adquirente':'Tipo Adquirente', 'width':'20%'},
        {'CPF/CNPJ':'CPF/CNPJ', 'width':''},
        {'Telefone':'Telefone','width':'15%'},
        {'Status':'Status','width':'100px'},
        {'Ação':'Ação','width':'70px'}
    ]);
    const [registros, setRegistro] = useState([
        {"id":"1", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"2", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"3", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Inativo"},
        {"id":"4", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"5", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"6", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Inativo"},
        {"id":"7", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"8", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Inativo"},
        {"id":"9", "Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"},
        {"id":"10","Nome/Razão Social":"Vinicius", "Tipo Cliente":"Pessoa Fisica", "CPF/CNPJ":"054.407.087-90", "Telefone":"21 964487209", "Status":"Ativo"}
        ])
    const [lojas, setLojas] = useState([]);

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    const handleStatus = (i) => {
        alert(i)
    }
    const handleAcao = () => {
        alert('Acao')
    }

    useEffect(()=>{
        getLojas();
    },[])
    return(
        <Container>
            <AreaTopo>
                <h1>Lista de Adquirentes</h1>
                <ButtonPadrao url="/Adquirente/Create" backgroundcolor="#009739" backgroundhover="#026E2B" width={200} height={35} margin="0px 20px" title="CADASTRAR ADQUIRENTE"/>
            </AreaTopo>
            <form>
                <AreaFiltros height={220} align="flex-end">
                    <AreaFiltrosCampos>
                        <p>Adquirente/Razão Social</p>
                        <input />
                        <p>Loja(s)</p>
                        <DropDownChoose stTodos={true} list={lojas} />
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
            <Table registro={registros}  head={head} onClick={handleAcao} clickStatus={handleStatus}/>
        </Container>
    )
}

export default Adquirente;
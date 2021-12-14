import React, { useState } from 'react';
import { Container } from './styled';
import { ButtonPadrao, Select } from '../../components/MainComponents';
import Table from '../../components/Table';
import DropDownChoose from '../../components/DropDownChoose';

const Atalhos = (props) => {
    const [head, setHead] = useState([
                                    {'Nome':'Nome', 'width':'20%'},
                                    {'Descricao':'Descricao', 'width':'50%'},
                                    {'Loja':'Loja', 'width':''},
                                    {'Ação':'Ação','width':'40px'}
                                ]);
    const [registros, setRegistro] = useState([
                                                {"id":"1", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"2", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"3", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"4", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"5", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"6", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"7", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"8", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"9", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"},
                                                {"id":"10", "Nome":"Vinicius", "Descricao":"....", "Loja":"Salato Alimentos"}
    ])
    const [lojas, setLojas] = useState([
        {"Nome":"Salato Alimentos Mage", "Status":false},
        {"Nome":"Salato Alimentos Piabeta", "Status":false},
        {"Nome":"Salato Alimentos Teresopolis", "Status":false},
        {"Nome":"Salato Alimentos Petropolis", "Status":false}]);

    const editClick = () => {
        alert('OK');
    }

    return(
        <Container>
            <div className="AreaTopo">
                <h1>Listas de Telas</h1>
                <ButtonPadrao>SAIBA MAIS</ButtonPadrao>
            </div>
            <div className="AreaFiltros">
                <div className="AreaFiltros-Campos">
                    <p>Loja(s)</p>
                    <DropDownChoose stTodos={true} list={lojas}/>
                </div>
                <div className="AreaFiltros-Button">
                    <ButtonPadrao height={30} width={190} margin={1}>Filtrar</ButtonPadrao>
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
            <Table onClick={editClick} registro={registros} head={head}/>
        </Container>
    )
}
export default Atalhos;
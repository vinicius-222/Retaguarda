import React, { useState, useRef, useEffect } from 'react';
import { AreaTopo, AreaFiltros, AreaFiltrosCampos, Select, ButtonPadrao, ButtonOption} from '../../../components/MainComponents';
import { AreaGoBack, Container } from './styled';
import LinkGoBack from '../../../components/LinkGoBack'
import DropDownChoose from '../../../components/DropDownChoose';
import SalatoAPI from '../../../helpers/SalatoAPI';

const Create = (props)=>{
    const api = SalatoAPI();
    const Nome = useRef();
    const [StStatus, setStStatus] = useState('A')
    const [Lojas, setLojas] = useState([]);

    const handleSalvar = (e) => {
        e.preventDefault();
    }

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    useEffect(()=>{
        getLojas();
        Nome.current.focus();
    },[])
    return(
        <Container>
            <AreaTopo>
                <h1>Cadastrar novo Contador</h1>
                <AreaGoBack>
                    <LinkGoBack url='/Contadores'/>
                </AreaGoBack>
            </AreaTopo>
            <AreaFiltros height={260} justify="flex-start">
                <form onSubmit={(e)=>handleSalvar(e)}>
                    <div className="linha" height={220} justify="flex-start">
                        <label className="area">
                            <div className="area--title">Lojas(s)</div>
                            <div className="area--input">
                                <DropDownChoose stTodos={true} list={Lojas}/>
                            </div>
                        </label>
                        <label className="area areaMedium">
                            <div className="area--title">Nome</div>
                            <div className="area--input">
                               <input 
                                    ref={Nome}
                               />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Dia de Envio</div>
                            <div className="area--input">
                                <Select width={100}>
                                    <option>1 dia do mês</option>
                                    <option>2 dia do mês</option>
                                </Select>
                            </div>
                        </label>
                    </div>
                    <div className="linha">
                        <label className="area areaLarge">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input 
                                
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Status</div>
                            <div className="area--input area--inputloja">
                                <ButtonOption onClick={()=>setStStatus('A')} backgroundcolor={StStatus =='A'? '#000E2D':'#9E9E9E'} backgroundhover={StStatus =='A'? '#000E2D':'#9E9E9E'}>Ativo</ButtonOption>
                                <ButtonOption onClick={()=>setStStatus('I')} backgroundcolor={StStatus == 'I'? '#000E2D':'#9E9E9E'}  backgroundhover={StStatus =='I'? '#000E2D':'#9E9E9E'}>Inativo</ButtonOption>
                            </div>
                        </label>
                    </div>
                    <div className="AreaButton">
                        <ButtonPadrao width={200} backgroundcolor='#009739' backgroundhover='#009739'>Salvar</ButtonPadrao>
                    </div>
                </form>
            </AreaFiltros>
        </Container>
    )
}

export default Create;
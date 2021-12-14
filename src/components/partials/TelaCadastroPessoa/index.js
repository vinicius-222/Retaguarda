import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Select, ButtonOption, Line, ButtonPadrao} from '../../../components/MainComponents';
import DataPic from '../../DataPic';
import {Container} from './styled';
import DropDownChoose from '../../DropDownChoose';
import SalatoAPI from '../../../helpers/SalatoAPI';

const TelaCadastroPessoa = (props) => {
    const api = SalatoAPI();
    const useForm = useRef();
    const [TpSexo, setTpSexo] = useState('M') 
    const [StStatus, setStStatus] = useState('A')
    const [StSelect, setStSelect] = useState(false);
    const [Lojas, setLojas] = useState([])


    const handleEnviar = (e) => {
        e.preventDefault();
        alert('ook')
    }

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
            <form onSubmit={(e)=>handleEnviar(e)} ref={useForm}>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">{props.tpPessoa}</div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>Pessoa Juridica</option>
                                <option>Pessoa Física</option>
                            </Select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Cnpj</div>
                        <div className="area--input">
                            <input 
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Razão Social</div>
                        <div className="area--input">
                            <input 
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Nome Fantasia</div>
                        <div className="area--input">
                            <input 
                            
                            />
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Inscrição Estadual</div>
                        <div className="area--input">
                            <input 
                            
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Inscrição Munícipal</div>
                        <div className="area--input">
                            <input 
                            
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Data de Nascimento</div>
                        <div className="area--input">
                            <DataPic 
                            
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Sexo</div>
                        <div className="area--input">
                            <ButtonOption backgroundcolor={TpSexo === 'M'? '#000A2F':'#9E9E9E'} onClick={()=>setTpSexo('M')} marginWidth={-1} marginHeigth={0}>Masculino</ButtonOption>
                            <ButtonOption backgroundcolor={TpSexo === 'F'? '#FA64F3':'#9E9E9E'} onClick={()=>setTpSexo('F')} marginWidth={-1}>Feminino</ButtonOption>
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area area--button">
                        <div className="area--title">Indicador da IE do Destinatário</div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>SELECIONE</option>
                                <option>Contribuinte ICMS</option>
                                <option>Contribuinte isento de inscrição</option>
                                <option>Não Contribuinte</option>
                            </Select>
                        </div>
                    </label>
                    <label className="area" width={75}>
                        <div className="area--title">Status</div>
                        <div className="area--input">
                            <ButtonOption backgroundcolor={StStatus === 'A'? '#000A2F':'#9E9E9E'} onClick={()=>setStStatus('A')} marginWidth={-1} marginHeigth={0}>Ativo</ButtonOption>
                            <ButtonOption backgroundcolor={StStatus === 'I'? '#000A2F':'#9E9E9E'} onClick={()=>setStStatus('I')} marginWidth={-1}>Inativo</ButtonOption>
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area area--button">
                        <div className="area--title">Observação</div>
                        <div className="area--input">
                            <textarea>

                            </textarea>
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area area--button">
                        <div className="area--title">Selecione as lojas que deseja cadastrar</div>
                            <div className="area--input area--inputloja">
                                <DropDownChoose stTodos={true} list={Lojas}/>
                            </div>
                    </label>
                </div>
                <h2>Plano de Conta</h2>
                <Line />
                <div className="linha">
                    <label className="area area--button">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>SELECIONE</option>
                                <option>Contribuinte ICMS</option>
                                <option>Contribuinte isento de inscrição</option>
                                <option>Não Contribuinte</option>
                            </Select>
                        </div>
                    </label>
                    <div className="area--add">
                        <img src={require('../../../assets/images/Add.png')}/>
                    </div>
                    <label className="area area--button">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>SELECIONE</option>
                                <option>Contribuinte ICMS</option>
                                <option>Contribuinte isento de inscrição</option>
                                <option>Não Contribuinte</option>
                            </Select>
                        </div>
                    </label>
                    <label className="area area--button">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>SELECIONE</option>
                                <option>Contribuinte ICMS</option>
                                <option>Contribuinte isento de inscrição</option>
                                <option>Não Contribuinte</option>
                            </Select>
                        </div>
                    </label>
                    <label className="area area--button">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100}>
                                <option>SELECIONE</option>
                                <option>Contribuinte ICMS</option>
                                <option>Contribuinte isento de inscrição</option>
                                <option>Não Contribuinte</option>
                            </Select>
                        </div>
                    </label>
                </div>
                <Line />
                <div id="FormTelaPessoa" className="linha linha--end">
                    <ButtonPadrao width={200} backgroundcolor='#009739' backgroundhover='#045C1E'>Salvar Cadastro</ButtonPadrao>
                </div>
            </form>
        </Container>
    )
}

export default TelaCadastroPessoa;
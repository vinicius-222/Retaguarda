import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Select, ButtonOption, Line, ButtonPadrao} from '../../../components/MainComponents';
import DataPic from '../../DataPic';
import {Container} from './styled';
import DropDownChoose from '../../DropDownChoose';
import SalatoAPI from '../../../helpers/SalatoAPI';

const TelaCadastroFuncionario = (props) => {
    const api = SalatoAPI();
    const useForm = useRef();
    const [TpSexo, setTpSexo] = useState('M') 
    const [StStatus, setStStatus] = useState('A')
    const [StSelect, setStSelect] = useState(false);
    const [Lojas, setLojas] = useState([])
    const [Cargos, setCargos] = useState([]);


    const handleEnviar = (e) => {
        alert('ook')
    }

    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }

    const getCargos = async() => {
        setCargos([]);
        let json = await api.getCargos();
        setCargos(json);
    }

    useEffect(()=>{
        getLojas();
        getCargos();
    },[])

    return(
        <Container>
            <form onSubmit={handleEnviar} ref={useForm}>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">CPF</div>
                        <div className="area--input">
                            <input 
                                required
                            />
                        </div>
                    </label>
                    <label className="area areaMedium">
                        <div className="area--title">Funcionario</div>
                        <div className="area--input">
                            <input 
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Data Nascimento</div>
                        <div className="area--input">
                            <DataPic 
                            
                            />
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Cargo</div>
                        <div className="area--input area--addButton">
                            <Select width={100}>
                                {Cargos &&
                                    Cargos.map((i,k) => 
                                        <option key={k}>{i.Nome}</option>
                                    )
                                }
                            </Select>
                            <div className="area--add">
                                <img src={require('../../../assets/images/Add.png')}/>
                            </div>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Salário R$</div>
                        <div className="area--input">
                            <input 
                            
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Comissão %</div>
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
                    <label className="area">
                        <div className="area--title">Data de Contrataçao</div>
                        <div className="area--input">
                            <DataPic 
                            
                            />
                        </div>
                    </label>
                    <label className="area areaMedium">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                            
                            />
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
                            <div className="area--add">
                                <img src={require('../../../assets/images/Add.png')}/>
                            </div>
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
                <div className="linha linha--end">
                    <ButtonPadrao width={200} backgroundcolor='#009739' backgroundhover='#045C1E'>Salvar Cadastro</ButtonPadrao>
                </div>
            </form>
        </Container>
    )
}

export default TelaCadastroFuncionario;
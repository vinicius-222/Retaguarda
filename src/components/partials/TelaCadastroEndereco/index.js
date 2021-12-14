import React,{useState, useEffect, useRef, useReducer} from 'react';
import {Container} from './styled';
import { Select, ButtonPadrao, Line} from '../../../components/MainComponents';
import ButtonCheck from '../../ButtonCheck';
import Table from '../../Table';
import SalatoAPI from '../../../helpers/SalatoAPI';
import {CEPMask, NumberMask} from '../../../components/Mask';

const TelaCadastroEndereco = (props) => {
    const useCEP = useRef();
    const api = SalatoAPI();
    const [StSelect, setStSelect] = useState(false);
    const [Cep, setCep] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Logradouro, setLogradouro] = useState('');
    const [Numero, setNumero] = useState('');
    const [UF, setUF] = useState('');
    const [Complemento, setComplemento] = useState('');
    const [CodigoCidade, setCodigoCidade] = useState('');
    const [Tipo, setTipo] = useState('Principal');
    const [Referencia, setReferencia] = useState('');
    const [Convenio, setConvenio] = useState('');
    const [Endereco, setEndereco] = useState(props.endereco ? props.endereco: []);
    const [StatusScreen, setStatusScreen] = useState('Adicao');
    const [index,setIndex] = useState(null);
    const [widthTela, setWidthTela] = useState(0);
    const [head, setHead] = useState([
        {'CEP':'CEP', 'width':'10%'},
        {'UF':'UF', 'width':'2%'},
        {'Logradouro':'Logradouro', 'width':'45%'},
        {'Cidade':'Cidade','width':'15%'},
        {'Bairro':'Bairro','width':'15%'},
        {'Numero':'Numero','width':'5%'},
        {'Tipo':'Tipo','width':'5%'},
        {'Complemento':'Complemento','width':'90px'},
        {'Ação':'Ação','width':'20px'}
    ]);

    const getCep =async () =>{
        const json = await api.getEndereco(Cep);
        if(json.ok){
            setLogradouro(json.address);
            setCidade(json.city);
            setBairro(json.district);
            setUF(json.state);
        }
    }

    const ClearFeilds = () =>{
        setCep('');
        setUF('');
        setLogradouro('');
        setCidade('');
        setBairro('');
        setComplemento('');
        setNumero('');
        setCodigoCidade('');
        setTipo('');
        setReferencia('');
        setConvenio('');
        setStSelect(false);
    }

    const handleEdit = (e, k) => {
        setCep(e.CEP);
        setUF(e.UF);
        setLogradouro(e.Logradouro);
        setCidade(e.Cidade);
        setBairro(e.Bairro);
        setComplemento(e.Complemento);
        setNumero(e.Numero);
        setCodigoCidade(e.CodigoCidade);
        setTipo(e.Tipo);
        setReferencia(e.Referencia);
        setConvenio(e.Convenio);
        e.Convenio == 'Ativo' ?setStSelect(true):setStSelect(false);
        setIndex(k);
        setStatusScreen('Edicao');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let pEndereco = [];
        pEndereco = Endereco;
        if(StatusScreen === 'Adicao'){
            pEndereco.push(
                {"CEP":Cep, 
                "UF":UF,
                "Logradouro":Logradouro,
                "Cidade":Cidade,
                "Bairro":Bairro,
                "Complemento":Complemento,
                "Numero":Numero,
                "Tipo":Tipo,
                "CodigoCidade":CodigoCidade,
                "Referencia":Referencia,
                "Convenio":Convenio}
            )
        }else{
            pEndereco[index].CEP = Cep
            pEndereco[index].UF = UF
            pEndereco[index].Logradouro =Logradouro
            pEndereco[index].Cidade = Cidade
            pEndereco[index].Bairro = Bairro
            pEndereco[index].Complemento = Complemento
            pEndereco[index].Numero = Numero
            pEndereco[index].CodigoCidade = CodigoCidade
            pEndereco[index].Tipo = Tipo
            pEndereco[index].Referencia = Referencia
            pEndereco[index].Convenio = Convenio
        }

        setEndereco(pEndereco);
        ClearFeilds();
        useCEP.current.focus();
        setStatusScreen('Adicao');
    }   

    useEffect(()=>{
        if(props.onClick){
            props.onClick(Endereco, widthTela);
        }
        useCEP.current.focus();
    },[Endereco])

    useEffect(()=>{
        if(Cep.length > 9){
            getCep();
        }
    },[Cep])

    useEffect(()=>{
        if(StSelect){
            setConvenio('Ativo');
        }else{
            setConvenio('Inativo');
        }
    },[StSelect])
    return(
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">CEP</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={CEPMask(Cep)}
                                onChange={(e)=>setCep(CEPMask(e.target.value))}
                                required
                                ref={useCEP}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">UF</div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100} value={UF} onChange={(e)=>setUF(e.target.value)} required>
                                <option>SELECIONE</option>
                                <option>RJ</option>
                            </Select>
                        </div>
                    </label>
                    <label className="area area--button">
                        <div className="area--title">Logradouro</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={Logradouro}
                                onChange={(e)=>setLogradouro(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Cidade</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={Cidade}
                                onChange={(e)=>setCidade(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Bairro</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={Bairro}
                                onChange={(e)=>setBairro(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Complemento</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={Complemento}
                                onChange={(e)=>setComplemento(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Numero</div>
                        <div className="area--input">
                            <input 
                                type="tel"
                                value={Numero}
                                onChange={(e)=>setNumero(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Codigo da Cidade</div>
                        <div className="area--input">
                            <input 
                                 type="tel"
                                 value={NumberMask(CodigoCidade)}
                                 onChange={(e)=>setCodigoCidade(NumberMask(e.target.value))}
                                 required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Tipo de Endereço</div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100} value={Tipo} onChange={(e)=>setTipo(e.target.value)} required>
                                <option>Principal</option>
                                <option>Residencial</option>
                                <option>Comercial</option>
                            </Select>
                            <div style={{marginLeft:5}} className="area--add">
                                <img src={require('../../../assets/images/Add.png')}/>
                            </div>
                        </div>
                    </label>
                    <label className="area area--ref">
                        <div className="area--title">Referencia</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                value={Referencia}
                                onChange={(e)=>setReferencia(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area area--smal">
                        <div className="area--title">Convênio</div>
                        <div className="area--input">
                            <ButtonCheck stSelect={StSelect} onClick={()=>setStSelect(!StSelect)} nome={StSelect ?"Ativo":"Inativo"} height={30} marginTop={1} marginRight={1}/>
                        </div>
                    </label>
                </div>
                <Line />
                <div className="linha linha--end">
                    <ButtonPadrao width={200} backgroundcolor='#009739' backgroundhover='#045C1E'>Salvar Endereço</ButtonPadrao>
                </div>
            </form>
            <Table registro={Endereco} head={head} onClick={(e, k)=>handleEdit(e, k)}/>
        </Container>
    )
}

export default TelaCadastroEndereco;
import React,{useState, useEffect, useRef} from 'react';
import { Container } from './styled';
import { Select, ButtonPadrao, Line} from '../../../components/MainComponents';
import { CELMask, NumberMask } from '../../Mask'
import Table from '../../Table';

const TelaCadastroContatos = (props) =>{
    const useContato = useRef();
    const [Contatos, setContatos] = useState(props.contatos ? props.contatos : [])
    const [Contato, setContato] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Ramal, setRamal] = useState('')
    const [Email, setEmail] = useState('')
    const [Classificacao, setClassificacao] = useState('Principal')
    const [StatusScreen, setStatusScreen] = useState('Adicao');
    const [index, setIndex] = useState(null);
    const [head, setHead] = useState([
        {'Contato':'Contato', 'width':'30%'},
        {'Telefone':'Telefone', 'width':'20%'},
        {'Ramal':'Ramal', 'width':'5%'},
        {'Email':'Email','width':'30%'},
        {'Classificacao':'Classificacao','width':'10%'},
        {'Ação':'Ação','width':'30px'}
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let pContato = [];
        pContato = Contatos;
        if(StatusScreen === 'Adicao'){
            pContato.push(
                {"Contato":Contato,
                "Telefone":Telefone,
                "Ramal":Ramal,
                "Email":Email,
                "Classificacao":Classificacao}
            )
        }else{
            pContato[index].Contato = Contato;
            pContato[index].Telefone = Telefone;
            pContato[index].Ramal = Ramal;
            pContato[index].Email = Email;
            pContato[index].Classificacao = Classificacao;
        }

        setContatos(pContato);
        clearField();
        useContato.current.focus();
        setStatusScreen('Adicao');
    }

    const handleEdit = (e, k) => {
        setContato(e.Contato);
        setTelefone(e.Telefone);
        setRamal(e.Ramal);
        setEmail(e.Email);
        setClassificacao(e.Classificacao);
        setIndex(k);
        setStatusScreen('Edicao');
    }

    const clearField = () =>{
        setContato('');
        setTelefone('');
        setRamal('');
        setEmail('');
        setClassificacao('Principal');
    }

    useEffect(()=>{
        if(props.onClick){
            props.onClick(Contatos);
        }
    },[Contatos])
    return(
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Telefone</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                required
                                value={CELMask(Telefone)}
                                onChange={(e)=>setTelefone(CELMask(e.target.value))}
                                ref={useContato}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Ramal</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                required
                                value={NumberMask(Ramal)}
                                onChange={(e)=>setRamal(NumberMask(e.target.value))}
                            />
                        </div>
                    </label>
                    <label className="area area--button">
                        <div className="area--title">Contato</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                required
                                value={Contato}
                                onChange={(e)=>setContato(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                required
                                type="email"
                                value={Email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Classificação</div>
                        <div className="area--input">
                            <Select borderWidth={2} width={100} value={Classificacao} onChange={(e)=>setClassificacao(e.target.value)} >
                                <option>Principal</option>
                                <option>Residencial</option>
                                <option>Comercial</option>
                            </Select>
                            <div style={{marginLeft:5}} className="area--add">
                                <img src={require('../../../assets/images/Add.png')}/>
                            </div>
                        </div>
                    </label>
                </div>
                <Line />
                <div className="linha linha--end">
                    <ButtonPadrao width={200} backgroundcolor='#009739' backgroundhover='#045C1E'>Salvar Contato</ButtonPadrao>
                </div>
            </form>
            <Table head={head} registro={Contatos} onClick={(e, k)=>handleEdit(e, k)}/>
        </Container>
    )
}

export default TelaCadastroContatos;
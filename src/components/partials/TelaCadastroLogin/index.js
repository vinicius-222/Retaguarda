import React,{useState, useEffect, useRef} from 'react';
import { Container } from './styled';
import { Select, ButtonPadrao, Line} from '../../../components/MainComponents';
import SalatoAPI from '../../../helpers/SalatoAPI';

const TelaCadastroLogin = (props) =>{
    const api = SalatoAPI();
    const useUsuario = useRef();
    const [Usuarios, setUsuarios] = useState(props.usuario ? props.usuario : [])
    const [Usuario, setUsuario] = useState('')
    const [Senha, setSenha] = useState('')
    const [ConfirmaSenha, setConfirmaSenha] = useState('')
    const [CargoAcesso, setCargoAcesso] = useState('')
    const [Cargos, setCargos] = useState([]);
    const [StatusScreen, setStatusScreen] = useState('Adicao');
    const [index, setIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let pUsuario = [];
        pUsuario = Usuarios;
        if(StatusScreen === 'Adicao'){
            pUsuario.push(
                {"Usuario":Usuario,
                "Senha":Senha,
                "ConfirmaSenha":ConfirmaSenha,
                "CargoAcesso":CargoAcesso}
            )
        }else{
            pUsuario[index].Usuario = Usuario;
            pUsuario[index].Senha = Senha;
            pUsuario[index].ConfirmaSenha = ConfirmaSenha;
            pUsuario[index].CargoAcesso = CargoAcesso;
        }

        setUsuarios(pUsuario);
        clearField();
        useUsuario.current.focus();
        setStatusScreen('Adicao');
    }


    const clearField = () =>{
        setUsuario('');
        setSenha('');
        setConfirmaSenha('');
        setCargoAcesso('');
    }

    const getCargos = async() => {
        let json = await api.getCargos();
        setCargos(json);
    }

    useEffect(()=>{
        getCargos();
    },[])

    useEffect(()=>{
        if(props.onClick){
            props.onClick(Usuarios);
        }
    },[Usuarios])
    return(
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="linha">
                    <label className="area">
                        <div className="area--title">Usuario</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                required
                                value={Usuario}
                                onChange={(e)=>setUsuario(e.target.value)}
                                ref={useUsuario}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                required
                                value={Senha}
                                onChange={(e)=>setSenha(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input 
                                type="password"
                                required
                                value={ConfirmaSenha}
                                onChange={(e)=>setConfirmaSenha(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Cargo de Acesso</div>
                        <div className="area--input">
                            <Select v
                                value={CargoAcesso} 
                                onChange={(e)=>setCargoAcesso(e.target.value)} 
                                required
                            >
                                {Cargos &&
                                    Cargos.map((i,k)=>
                                        <option>{i.Nome}</option>
                                    )
                                }
                            </Select>
                        </div>
                    </label>
                </div>
                <Line />
            </form>
        </Container>
    )
}

export default TelaCadastroLogin;
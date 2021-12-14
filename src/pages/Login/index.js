import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import { SearchArea } from './styled';
import useApi from '../../helpers/SalatoAPI'
import { PageContainer, ErrorMessage, SucessoMessage,  PageTitle  } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

const Page =  (props) => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabledLogin, setDisaLbledoLogin] = useState(false);
    const [disabledCadastrar, setDisabledCadastrar] = useState(false);
    const [error, setError] = useState('');
    const [sucess, setsucess] = useState('');
    
    const handleCadastrar = (e) => {
        e.preventDefault();
        window.location.href = '/Cadastrar';
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisaLbledoLogin(true);
        setError('');
        setsucess('');

        const json = await api.login(email,password);

        if (json.error){
            setError(json.error);
        }else{
            doLogin(json.jwt, rememberPassword, json.NmVendedor, json.hash);
            setsucess('Login efetuado com sucesso!!');
            window.location.href = '/';
        }
        setDisaLbledoLogin(false);
    }
    return(
        <SearchArea>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {sucess && <SucessoMessage>{sucess}</SucessoMessage>}
            <form className="Container" onSubmit={handleSubmit}>
                <div className="areaLogo">
                    <img src={require('../../assets/images/LogoLandPage.png')}/>
                </div>
                <label className="area">
                    <div className="area--input">
                        <input
                            type="email"
                            disabled={disabledLogin}
                            placeholder="LOGIN"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            required
                        />
                    </div>
                </label> 
                <label className="area">
                    <div className="area--input">
                        <input 
                            type="password"
                            disable={disabledLogin}
                            value={password}
                            placeholder="SENHA"
                            onChange={e=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                </label> 
                <label className="area">
                    <div className="area--title"></div>
                    <div className="area--button">
                        <button disabled={disabledLogin}>{!disabledLogin ? 'Fazer Login' :  <Loading color="#FFFFFF" height="20px" width="20px" />}</button>
                    </div>
                </label>
            </form>
        </SearchArea>
    )
}

const mapStateToProps = (state) =>{
    return{
        nome:state.user.nome
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
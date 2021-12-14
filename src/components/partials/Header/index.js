import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import SalatoAPI from '../../../helpers/SalatoAPI';
import { Line } from '../../MainComponents';
import { HeaderArea } from './styled';
import { connect } from 'react-redux';
import { isLogged, doLogout, doLogin } from '../../../helpers/AuthHandler';
import SetaBtn from '../SetaBtn';


const Header = (props) => {
    let logged = isLogged();
    const api = SalatoAPI();
    const [StDisplay, setStDisplay] = useState(false);

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    const getRepresentadas = async () =>{
        const json = await api.getRepresentadas();
        props.setListRepresentadaRedux(json.Representada);
    }

    const handleDropMenu = () =>{
        setStDisplay(!StDisplay);
        document.querySelector('.Campo1').style.opacity = 0;
        document.querySelector('.Campo2').style.opacity = 0;
        setTimeout(()=>{
            document.querySelector('.Campo1').style.opacity = 1;
            document.querySelector('.Campo2').style.opacity = 1;
        },300)
    }

    useEffect(()=>{
        getRepresentadas();
    },[])


    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={require('../../../assets/images/LogoLandPage.png')}/>
                    </Link>
                </div>
            </div>
            <div className="areaInfo" onClick={()=>handleDropMenu()}>
                <img className="imagenPerfil"src={require('../../../assets/images/PerfilSmall.png')}/>
                <div className="userName">Vinicius</div>
                <SetaBtn StTeste={StDisplay}/>
            </div>
            <div className="AreaMenu">
               <div className={StDisplay ? "Menu":"MenuInative"}>
                   <div className='Campo1'>
                        <Link to="/minhaconta">
                            Conta    
                        </Link>
                   </div>
                   <div className='Campo2'>
                        <button onClick={handleLogout}>Sair</button>
                   </div>
               </div>
            </div>
        </HeaderArea>
    
    );
}

const mapStateToProps = (state) => {
    return{
        listRepresentadasRedux:state.representada.listRepresentada,
        StCart:state.pedidos.StCart,
        qtCart:state.pedidos.qtCart,
        StMenu:state.user.StMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setStMenu:(StMenu)=>dispatch({type:'SET_MENU', payload:{StMenu}}),
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}}),
        setStCart:(StCart)=>dispatch({type:'SET_STCART', payload:{StCart}}),
        setQtCart:(qtCart)=>dispatch({type:'SET_QTCART', payload:{qtCart}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
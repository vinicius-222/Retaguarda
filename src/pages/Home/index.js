import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import { Warning, Select, Line, SubTitle, ButtonPadrao, ButtonOption } from '../../components/MainComponents';
import DataPic from '../../components/DataPic';
import Loading from '../../components/Loading';
import {parseISO, format, parse} from 'date-fns';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { isLogged } from '../../helpers/AuthHandler';
import SalatoAPI from '../../helpers/SalatoAPI';
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import DropDownChoose from '../../components/DropDownChoose';

const Home = (props) =>{
    const api = SalatoAPI();
    let logged = isLogged();

    const [dtInicia, setDtInicia] = useState (new Date);
    const [dtFinal, setDtFinal] = useState (new Date);
    const [TpData, setTpData] = useState('V');
    const [lojas, setLojas] = useState([]);
    
    const getLojas = async() =>{
        setLojas([]);
        let json = await api.getLojas();
        setLojas(json);
    }
    
    useEffect(()=>{
        const getQtCartCompra = async () => {
            let jwt = Cookies.get('token');
            const json = await api.getCountCar(jwt);
            props.setqtCart(json.QtCartCompra);
        }
        
        if (isLogged()){
            getQtCartCompra();
        }
        getLojas();
    },[]);

    return(
        <Container>
            <div className="AreaTopo">
                <h1>Bem vindo, Vinicius</h1>
                <ButtonPadrao>
                    SAIBA MAIS 
                </ButtonPadrao>   
            </div>
            <div className="AreaFiltros">
                <div className="AreaCampos">
                    <b>Periodo</b>
                    <b className="b-1">Loja</b>
                    <DropDownChoose stTodos={true} list={lojas} />
                </div>
                <div className="AreaCampos">
                    <b className="areaB">Periodo</b>
                    <b className="b-1">Data Inicial</b>
                    <DataPic
                        selected={dtInicia}
                        onChange={(e)=>setDtInicia(e)}
                    />
                </div>
                <div className="AreaCampos">
                    <b>Periodo</b>
                    <b className="b-1">Data Final</b>
                    <DataPic
                        selected={dtFinal}
                        onChange={(e)=>setDtFinal(e)}
                    />
                </div>
                <div className="AreaButton">
                    <ButtonPadrao width={80} height={35}>
                        Filtrar
                    </ButtonPadrao>   
                </div>
            </div>
            <div className="AreaCorpo">
                <SubTitle>Contas à Pagar / Contas à Receber</SubTitle>
                <Line/>
                <div className="AreaDatas">
                    <ButtonOption onClick={()=>setTpData('V')} backgroundcolor={TpData === 'V' ? "#000E2D": "#CCC"}>Data Vencimento</ButtonOption>
                    <ButtonOption onClick={()=>setTpData('P')} backgroundcolor={TpData === 'P' ? "#000E2D": "#CCC"}>Data Pagamento</ButtonOption>
                </div>
                <div className="AreaResult">
                    <Warning>
                        <label><strong>Atenção: </strong>A seleção de filtros não gerou resultados.</label>
                    </Warning>
                </div>
                <SubTitle>Movimento de Venda</SubTitle>
                <Line/>
                <div className="AreaResult">
                    <Warning>
                        <label><strong>Atenção: </strong>A seleção de filtros não gerou resultados.</label>
                    </Warning>
                </div>
            </div>
        </Container>
    )
} 

const mapStateToProps = (state) => {
    return{
        listRepresentadasRedux:state.representada.listRepresentada
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}}),
        setqtCart:(qtCart)=>dispatch({type:'SET_QTCART', payload:{qtCart}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Home);
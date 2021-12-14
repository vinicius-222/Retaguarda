import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import SalatoAPI from '../../helpers/SalatoAPI';
import Loading from '../../components/Loading';
import { connect } from 'react-redux';

const Representadas = (props) =>{
    const API = SalatoAPI();
    

    return(
        <Container>
            <div className="AreaTitle">Representadas</div>

            {props.listRepresentadasRedux.length == 0 ? 
                <div className="AreaLoading">
                    <Loading color="#00008B"/> 
                </div>
            : ''}

            {props.listRepresentadasRedux.map((i,k)=>
                <div key={k} className="AreaList">
                    <div>{i.NmPessoa}</div>
                    <div className="AreaList--button">
                        <div className="AreaList--btnActive">Ativo</div>
                    </div>
                </div>
            )}
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
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Representadas);
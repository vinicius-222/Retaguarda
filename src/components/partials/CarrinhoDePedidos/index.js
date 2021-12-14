import React, { useState} from 'react';
import { PageArea } from './styled';
import { connect } from 'react-redux';
import { CEPMask } from '../../Mask';
import Loading from '../../Loading';
import SalatoAPI, {BASEAPIIMAGE} from '../../../helpers/SalatoAPI';


const BASE = BASEAPIIMAGE;
let List = [];
const CarrinhoDePedido = (props) =>{

    const [NmCliente, setNmCliente] = useState('');
    const [DsCEP, setDsCEP] = useState('');
    const [DsEndereco, setDsEndereco] = useState([]);
    const [StLoadingCEP, setStLoadingCEP] = useState(false);
    const [vlSubTotal, setVlSubTotal] = useState(0);
    const [vlDesconto, setVlDesconto] = useState(0);
    const [VlTotalProduto, setVlTotalProduto] = useState(0);

    const setCEP = (v) => {
        setDsCEP(CEPMask(v));
    }

    const OpemModalCliente = () => {

    }

    const DecCartQT = (i,k) => {
        
    }

    const IncCartQT = (i,k) => {
       
    }

    const removeItem = (i,k) => {

    }

    return(
        <PageArea>
           <aside className={props.StCart ? 'show' : ''}>
                <div class="cart--area">
                    <div onClick={()=>props.setStCart(false)} class="menu-closer1">❌</div>
                    <div onClick={()=>props.setStCart(false)} class="menu-closer2">Continuar Vendendo</div>
                    {DsEndereco.bairro &&
                    <>
                        <h3>Consulte a entrega:</h3>
                        <div className="cart--cep">
                            <form onSubmit={e=> e.preventDefault()} className="cart--cepInfo">
                                <input
                                    type="tel" 
                                    name="DsCEP" 
                                    value={DsCEP}
                                    onChange={e=>setCEP(e.target.value)}
                                    placeholder="Digite um CEP"
                                />
                            </form>
                            {DsCEP.length >= 10 && DsCEP.length <= 11 &&
                                <div className="cart--check">
                                    <img src={require('../../../assets/images/check.png')} />
                                </div>
                            }
                            {DsCEP.length > 0 && DsCEP.length < 10 &&
                                <div className="cart--check">
                                    <img src={require('../../../assets/images/delete.png')} />
                                </div>
                            }
                            {StLoadingCEP && 
                                <div className="cart--loadingCEP">
                                    <Loading  height="15px" width="15px" color="#FF0000"/>    
                                </div>
                            }
                        </div>  
                    </>
                    }
                    {DsEndereco.bairro && 
                        <div className="cart--end">
                            {`${DsEndereco.tipo_logradouro} ${DsEndereco.logradouro} `}<br/>
                            {` Bairro: ${DsEndereco.bairro}`}  <br/>
                            {`Cidade: ${DsEndereco.cidade} / UF:${DsEndereco.uf} `}
                        </div>
                    }
                    <h2>Nome do Cliente</h2>
                    <div className="AreaCleinte">
                        <div className="AreaNmCliente">{NmCliente}</div>
                        <div className="AreaImagenLupa" onClick={()=>OpemModalCliente()}>
                            <img src={require('../../../assets/images/lupa1.png')}/>
                        </div>
                    </div>

                    <h3>Itens do Pedido</h3>
                    <div class="cart">
                    {List.map((i,k)=>
                        <div className="cart--itens">
                            <div className="cart--products">
                                <img src={BASE+i.LinckImage} />
                                <span>{i.NmProduto}</span>
                            </div>
                            <div class="ProdutoInfo--pricearea">
                                <div class="ProdutoInfo--price">
                                    <div class="ProdutoInfo--qtarea">
                                        <button onClick={()=>DecCartQT(i, k)} class="ProdutoInfo--qtmenos">-</button>
                                        <div class="ProdutoInfo--qt">{parseFloat(i.QtPedida)}</div>
                                        <button onClick={()=>IncCartQT(i, k)} class="ProdutoInfo--qtmais">+</button>
                                    </div>
                                    <div class="ProdutoInfo--actualPrice">R$ {parseFloat(i.VlUnitario).toFixed(2)}</div>
                                    <div class="ProdutoInfo--actualPrice">R$ {parseFloat(i.VlTotal).toFixed(2)}</div>
                                    <div onClick={()=>removeItem(i,k)} className="ProdutoInfo--btnremover">
                                        <img src={require('../../../assets/images/trash.png')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                    <div class="cart--details">
                        <div class="cart--totalitem subtotal">
                            <span>Subtotal</span>
                            <span>R$ {parseFloat(vlSubTotal).toFixed(2)}</span>
                        </div>
                        <div class="cart--totalitem desconto">
                            <span>Desconto (-10%)</span>
                            <span>R$ {vlDesconto.toFixed(2)}</span>
                        </div>
                        <div class="cart--totalitem total big">
                            <span>Total</span>
                            <span>R$ {VlTotalProduto.toFixed(2)}</span>
                        </div>
                        <div class="cart--finalizar">Finalizar o Pedido</div>
                    </div>
                </div>
            </aside>
        </PageArea>
    )
}

const mapStateToProps = (state) => {
    return{
        listRepresentadasRedux:state.representada.listRepresentada,
        StCart:state.pedidos.StCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}}),
        setStCart:(StCart)=>dispatch({type:'SET_STCART', payload:{StCart}}),
        setQtCart:(qtCart)=>dispatch({type:'SET_QTCART', payload:{qtCart}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CarrinhoDePedido);
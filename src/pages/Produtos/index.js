import React, { useState , useEffect, useRef } from 'react';
import { Container, PageContainer, PageArea } from './styled';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import AdItem from '../../components/partials/AdItem';
import Loading from '../../components/Loading';
import SalatoAPI, {BASEAPIIMAGE} from '../../helpers/SalatoAPI';
import { useLocation } from 'react-router-dom';
import { CEPMask } from '../../components/Mask';
import { isLogged} from '../../helpers/AuthHandler';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';


const BASE = BASEAPIIMAGE;
let List = [];
const Produtos = (props) =>{
    const api = SalatoAPI();
    const SetFocus = useRef(); 
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();

    const [pIdProduto, setpIdProduto] = useState(query.get('IdProduto') !== null ? query.get('IdProduto') : '');
    const [IdRepresentada, setIdRepresentada] = useState(0);
    const [addInfoProduto, setAddInfoProduto] = useState([]);
    const [grupoProduto, setGrupoProduto] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [AddInfoProdutoTotal, setAddInfoProdutoTotal] = useState(0);
    const [StLoading, setStLoading] = useState(false);
    const [StLoadingClientes, setStLoadingClientes] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [NmProduto, setNmProduto] = useState('');
    const [NmCliente, setNmCliente] = useState('');
    const [NmClienteSearch, setNmClienteSearch] = useState('');
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [modalClienteIsOpen, setmodalClitentIsOpen] = useState(false);
    const [srcLinck, setsrcLinck] = useState('');
    const [DsNmProduto, setDsNmProduto] = useState('');
    const [Preco, setPreco] = useState(0);
    const [DsProdutoSite, setDsProdutoSite] = useState('');
    const [qtProduto, setQtProduto] = useState(1);
    const [idProduto, setIdProduto] = useState(0);
    const [DsCEP, setDsCEP] = useState('');
    const [DsEndereco, setDsEndereco] = useState([]);
    const [StLoadingCEP, setStLoadingCEP] = useState(false);
    const [vlSubTotal, setVlSubTotal] = useState(0);
    const [vlDesconto, setVlDesconto] = useState(0);
    const [VlTotalProduto, setVlTotalProduto] = useState(0);
    const [logged] = useState(isLogged);
    const [Clientes, setClientes] = useState([]);
    const [CondicaoPagamento, setCondicaoPagamento] = useState([]);
    const [IdCondicaoDePagamento, setIdCondicaoDePagamento] = useState(0);
    const [dtEmissao, setdtEmissao] = useState('');
    const [dtEntrega, setDtEntrega] = useState('');
    const [IdCliente, setIdCleinte] = useState(0);
    const [IdGrupoProduto, setIdGrupoProduto] = useState(36);

    const getInfoProduto = async () => {
        let Limit = 10;
        let offset = (currentPage-1) * Limit + 1;
        const json = await api.getProdutoBanner(
            NmProduto,
            1,
            Limit,
            0,
            offset,
            IdGrupoProduto
        );
        setAddInfoProduto(json.Produtos);
        setAddInfoProdutoTotal(json.CountProdutos);
        //setresultOpacity(1);
        setStLoading(false);
       
    }

    const getProduto = async () => {
        const json = await api.getProdutoPesquisa(
            NmProduto,
            1
        );
        setAddInfoProduto(json.Produtos);
    }

    const getCondicaoPagamento = async () =>{
        const json = await api.getCondicaoPagamento();
        setCondicaoPagamento(json);
    }

    const parseDate = (str, format, locale) => {
        const parsed = dateFnsParse(str, format, new Date(), { locale });
        if (DateUtils.isDate(parsed)) {
            return parsed;
        }
        return undefined;
    }

    const handleDtInicio = (str, format, locale) =>{
        let dt = parseDate(str, format, locale);
        if(dt){
            setdtEmissao(formatDate(dt, 'yyyy-LL-dd', locale));
        }
    }

    const handleDtEntrega = (str, format, locale) =>{
        let dt = parseDate(str, format, locale);
        if(dt){
            setDtEntrega(formatDate(dt, 'yyyy-LL-dd', locale));
        }
    }

    const formatDate = (date, format, locale) => {
        return dateFnsFormat(date, format, { locale });
    }

    const getCarCompra = async () => {
        let jwt = Cookies.get('token');
        const json = await api.getCarCompra(
            jwt
        );
        List = json.CarrinhoDeCompra;
        UpdateCart();        
    }

    const getCliente = async (e) =>{
        setStLoadingClientes(true);
        if (e){
            e.preventDefault();   
        }

        setTimeout(async()=>{
            let jwt = Cookies.get('token');
            const json = await api.getInfoCliente(
            NmClienteSearch,
            jwt
        )
        setClientes(json.Pessoa);
        setStLoadingClientes(false);
        },1000)
    }

    const getPesquisa = (e) => {
        if (e){
            e.preventDefault();   
        }
        getProduto();
    };

    const OpemModal = (i) => {
        setsrcLinck(i.LinckImage);
        setDsNmProduto(i.NmProduto);
        setPreco(parseFloat(i.VlPreco).toFixed(2));
        setIdProduto(i.IdProduto);
        setDsProdutoSite(i.DsProdutoSite);
        setmodalIsOpen(!modalIsOpen);
        
        setTimeout(()=>{
            if (!modalIsOpen){
                document.querySelector('.WindowArea').style.backgroundColor = "rgba(0,0,0,.7)";
                document.querySelector('.WindowBody').style.opacity = 1;
            }
        },200)
    }

    const closeModal =  () =>{
        
        if (modalIsOpen){
            document.querySelector('.WindowArea').style.backgroundColor = "transparent";
            document.querySelector('.WindowBody').style.opacity = 0;
        }
        
        setTimeout(()=>{
            setmodalIsOpen(!modalIsOpen);
        },200);
        setpIdProduto('');
        setQtProduto(1);
    }

    const OpemModalCliente = () => {

        setmodalClitentIsOpen(!modalClienteIsOpen);
        setTimeout(()=>{
            if (!modalClienteIsOpen){
                document.querySelector('.ClienteWindowBody').style.opacity = 1;
            }
        },200)
        setClientes([]);
        setNmClienteSearch('');
        props.setStCart(false);
        setTimeout(() => {
            SetFocus.current.focus();
        }, 1000);
        
       
    }

    const CloseModalCliente = () => {

        if (modalClienteIsOpen){
            document.querySelector('.ClienteWindowBody').style.opacity = 0;
        }

        setTimeout(()=>{
            setmodalClitentIsOpen(!modalClienteIsOpen);
        },200)
        props.setStCart(true);

    }
    const DecQuantidade = () => {
        let v = qtProduto - 1;
        if (v >= 1){
            setQtProduto(v);
        }
    }

    const IncQuantidade = () => {
        let v = qtProduto + 1;
        setQtProduto(v);
    }

    const IncCartQT = (i,k) => {
        let arr = [];
        i.QtPedida ++;
        arr = List;
        arr[k].QtPedida = i.QtPedida;
        arr[k].VlTotal = i.QtPedida * i.VlUnitario;
        List = arr;
        UpdateCart();
        UpdateCarCompra(arr[k].IdProduto, parseFloat(arr[k].QtPedida));
    }

    const DecCartQT = (i,k) => {
        if (i.QtPedida > 1){
            let arr = [];
            i.QtPedida --;
            arr = List;
            arr[k].QtPedida = i.QtPedida;
            arr[k].VlTotal = i.QtPedida * i.VlUnitario;

            UpdateCart();
            UpdateCarCompra(arr[k].IdProduto, parseFloat(arr[k].QtPedida));
        }
    }

    const removeItem = (i,k) => {
        List.splice(k,1);
        deleteCarCompra(i.IdProduto);
        UpdateCart();
        if (List.length == 0){
            props.setStCart(false);
        }
    }

    const deleteCarCompra = async (tIdProduto) => {
        let jwt = Cookies.get('token');

        const json = await api.deleteCarCompra(
            jwt,
            tIdProduto
        )
        return json;
    }

    const setCEP = (v) => {
        setDsCEP(CEPMask(v));
    }

    const getItem = () => {
        let VlPrecoFinal  = 1;
        VlPrecoFinal = qtProduto * Preco;

        let key = List.findIndex((item) =>item.IdProduto == idProduto);

        if (key > -1){
            List[key].QtPedida = parseFloat(List[key].QtPedida) + parseFloat(qtProduto);
            List[key].VlTotal = List[key].QtPedida * Preco;
            UpdateCarCompra(List[key].IdProduto, parseFloat(List[key].QtPedida));
        }else{
            InsertCarCompra();
            List.push({
                "IdProduto":idProduto,  
                "NmProduto":DsNmProduto, 
                "LinckImage":srcLinck, 
                "QtPedida":qtProduto, 
                "VlUnitario":Preco, 
                "VlTotal":VlPrecoFinal});
        }
        props.setStCart(true);
        UpdateCart();
        closeModal();
    }

    const SomaValoresTotais = () => {
        let promise = new Promise((resolve, reject) =>{
            let v = 0;
            for (let i in List){
                v = v + parseFloat(List[i].VlTotal);
            }
            resolve(v);
        })
        return promise;
    }

    const SomaItensTotais = () => {
        let promise = new Promise((resolve, reject) =>{
            let q = 0;
            for (let i in List){
                q = q + parseFloat(List[i].QtPedida);
            }
            resolve(q);
        })
        return promise;
    }

    const UpdateCart = () =>{
    
        SomaItensTotais()
        .then((r) => {
            props.setQtCart(r)
            
        });

        SomaValoresTotais()
        .then((r) => {
            let desconto = r * 0.10;
            setVlDesconto(desconto);
            setVlSubTotal(r);
            setVlTotalProduto(r-desconto);
        })   
    }

    const UpdateCarCompra = async (tIdProduto, tQtProduto) => {
        let jwt = Cookies.get('token');
        const json = await api.updateCarCompra(
            jwt,
            tIdProduto,  
            tQtProduto
        );
        return json;
    }

    const CheckItems = () => {
        let promise = new Promise((resolve, reject) =>{

            if (!IdCliente){
                resolve(false);
            }

            if (!dtEmissao){
                resolve(false);
            }

            if (!dtEntrega){
                resolve(false);
            }

            if (!IdCondicaoDePagamento){
                resolve(false);
            }
            
            if (List.length <= 0){
                resolve(false);
            }

            if (IdRepresentada == 0){
                resolve(false);
            }

            resolve(true);
        })
        return promise;
    }

    const HandleBtnEnviar = async () =>{
        CheckItems().then(async(r) =>{
            if (r === true){
                props.setStCart(false);
                setStLoading(true);
                let jwt = Cookies.get('token');
                let Itens = {'itensPedido':List};
                let Id = await api.getCode(
                    'PedidoDeVenda',
                    'IdPedidoDeVenda'
                );

                const json = await api.setPedidoDeVenda(
                    Id,
                    2,
                    IdCliente,
                    dtEmissao,
                    dtEntrega,
                    35,
                    VlTotalProduto,
                    "A",
                    IdCondicaoDePagamento,
                    VlTotalProduto,
                    "",
                    jwt,
                    Itens,
                    IdRepresentada
                )
                if (!json.error){
                    getCarCompra();
                    handleDtInicio('','','');
                    setIdCondicaoDePagamento('');
                    setNmCliente('');
                    setStLoading(false);
                }
                alert('Pedido enviado com sucesso!!');
                return json;
            }else{
                alert('Ha informacoes essenciais vazia!!');
            }
        })
    }

    const InsertCarCompra = async () => {
        let jwt = Cookies.get('token');
        const json = await api.insertCarCompra(
            jwt,
            idProduto,  
            qtProduto
        );
        return json;
    }

    const InsereCliente = (i) =>{
        setNmCliente(i.NmPessoa);
        setIdCleinte(i.IdPessoa);
        CloseModalCliente();
    }

    const getGrupoProduto = async () => {
        let json = await api.getGrupoProduto();
        
        if(!json.error){
            setGrupoProduto(json.GrupoProduto);
        }
    }

    useEffect(()=>{
        getGrupoProduto();
        setStLoading(true);
        setTimeout(()=>{
            getInfoProduto();
            getCondicaoPagamento();
        },1000);
    },[])

    useEffect(() =>{
        setStLoading(true);
        //setresultOpacity(0.3);
        setTimeout(()=>{
            getInfoProduto();
        },400)

    },[currentPage])

    useEffect(() => {
        if (logged){
            getCarCompra();
        }
    },[logged])

    useEffect(()=>{
        if(addInfoProduto.length > 0) {
            setPageCount( Math.ceil( AddInfoProdutoTotal / addInfoProduto.length ) );
        } else {
            setPageCount( 0 );
        }
        
    }, [AddInfoProdutoTotal]);

    useEffect(()=>{
        if (currentPage !== 1){
            setCurrentPage(1);
        }else {
            getInfoProduto();
        }
    },[IdGrupoProduto])
    
    let pagination = [];
    for(let i=1;i<=pageCount;i++) {
        pagination.push(i);   
    }
    const FORMAT = 'dd/LL/yyyy';
    return(
        <PageContainer>
            <Container>
                <div style={{display: modalIsOpen ? 'flex' : 'none'}} class="WindowArea" > 
                    <div  class="WindowBody">
                        <div class="ProdutoBig">
                            <img src={BASE+srcLinck}/>
                        </div>
                        <div class="ProdutoInfo">
                            <h2>{DsNmProduto}</h2>
                            <div class="ProdutoInfo--desc">{DsProdutoSite}</div>
                            <div class="ProdutoInfo--pricearea">
                                <div class="ProdutoInfo--sector">Preço</div>
                                <div class="ProdutoInfo--price">
                                    <div class="ProdutoInfo--actualPrice">R$ {Preco}</div>
                                    <div class="ProdutoInfo--qtarea">
                                        <button onClick={DecQuantidade} class="ProdutoInfo--qtmenos">-</button>
                                        <div class="ProdutoInfo--qt">{qtProduto}</div>
                                        <button onClick={IncQuantidade} class="ProdutoInfo--qtmais">+</button>
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>getItem()} class="ProdutoInfo--addButton">Adicionar ao carrinho</div>
                            <div onClick={()=>closeModal()} class="ProdutoInfo--cancelButton">Cancelar</div>
                        </div>
                    </div>
                </div>
                <div style={{display: modalClienteIsOpen ? 'flex' : 'none'}} class="ModalCliente" > 
                    <div  class="ClienteWindowBody">
                        <div className="AreaPesquisaCliente">
                            <form>
                                <input
                                    placeholder="Digite um nome de cliente para pesquisa" 
                                    type="text"
                                    value={NmClienteSearch}
                                    onChange={e=>setNmClienteSearch(e.target.value)}
                                    ref={SetFocus}
                                />
                                <button>Pesquisar</button>

                            </form>
                        </div>

                        <div className="AreaListClientes" >
                            {StLoadingClientes && 
                                <div className="AreaLoading">
                                    <Loading color="#00008B"/>     
                                </div>
                            }
                            {Clientes.length !== 0 ?
                                Clientes.map((i,k)=>
                                <div className="LineCliente">
                                    <div className="AreaNmPessoa">{i.NmPessoa}</div>
                                    <div onClick={()=>InsereCliente(i)} className="btnInserir">Inserir</div>
                                </div>
                                )
                            :''}
                        </div>
                        <div className="AreaButtonCliente">
                            <div onClick={()=>CloseModalCliente()} class="cancelButton">Fechar</div>
                        </div>
                    </div>
                </div>
                <div className="AreaPesquisa">
                    <div className="AreaLocalizacaoArea">
                        <form onSubmit={getPesquisa}>
                            <input 
                                type="text"
                                placeholder="Digite um produto para pesquisa"
                                value={NmProduto}
                                onChange={e=>setNmProduto(e.target.value)}
                            />
                            <button>Pesquisar</button> 
                        </form>
                    </div>
                </div>
            </Container>
                <PageArea>
                    <div className="AreaList">
                        <div className="AreaGrupo">
                            {grupoProduto.map((i,k)=>(
                                <div className="ItemGrupo" onClick={(e)=>{
                                    setNmProduto('');   
                                     setIdGrupoProduto(i.IdGrupoProduto)
                                }}>{i.DsGrupoProduto}</div>
                            ))}

                        </div>
                        <div className="AreaList">  
                            <div className="AreaListTopo">
                                <h3>Produtos</h3>
                            </div>
                            <div className="list" style={{opacity:1}}>

                                {StLoading && 
                                    <div className="AreaLoading">
                                        <Loading color="#00008B"/>     
                                    </div>
                                }

                                {!StLoading && 
                                    addInfoProduto.map((i, k) =>
                                        <AdItem className="adItem" key={k} data={i} onClick={()=>{
                                            OpemModal(i);
                                        }}/>
                                    )
                                }
                            </div>
                            <div className="pagination">
                                {pagination.map((i,k)=>
                                    <div onClick={()=>setCurrentPage(i)} className={i===currentPage?'pagItem active':'pagItem'}>{i}</div>  
                                )}
                            </div>
                        </div>
                    </div>
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
                                            <img src={require('../../assets/images/Check.png')} />
                                        </div>
                                    }
                                    {DsCEP.length > 0 && DsCEP.length < 10 &&
                                        <div className="cart--check">
                                            <img src={require('../../assets/images/delete.png')} />
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
                            <div className="AreaDados">
                                <div className="AreaData">
                                    <div className="AreaData--AreaData">
                                        <h4>Data Emissão</h4>
                                        <DayPickerInput
                                            formatDate={formatDate}
                                            format={FORMAT}
                                            parseDate={handleDtInicio}
                                            placeholder="Data Emissão"
                                            dayPickerProps={{
                                                weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab'],
                                                months:['Janeiro','Fevereiro','Marco','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembbro']
                                            }}
                                        />
                                    </div>
                                    <div className="AreaData--AreaData">
                                        <h4>Data Entrega</h4>
                                        <DayPickerInput
                                            formatDate={formatDate}
                                            format={FORMAT}
                                            parseDate={handleDtEntrega}
                                            placeholder="Data Entrega"
                                            dayPickerProps={{
                                                weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab'],
                                                months:['Janeiro','Fevereiro','Marco','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembbro'],
                                                className:"AreaPic"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="AreaCleinte">
                                    <h4>Cliente</h4>
                                    <div className="AreaCleinte AreaCleinte--SubClientes">
                                        <div className="AreaNmCliente">{NmCliente}</div>
                                        <div className="AreaImagenLupa" onClick={()=>OpemModalCliente()}>
                                            <img src={require('../../assets/images/lupa1.png')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="AreaCondicaoPagamento"> 
                                    <h4>Condicao de Pagamento</h4>
                                    <select type="text" value={IdCondicaoDePagamento} onChange={e=>setIdCondicaoDePagamento(e.target.value)}>
                                        <option></option>
                                        {CondicaoPagamento.map((i,k)=>
                                            <option className="AreaOption" value={i.IdCondicaoPagamento} key={k} placeholder="Selecione uma Representada">{i.DsCondicaoPagamento}</option>
                                        )}
                                    </select>   
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
                                                <img src={require('../../assets/images/trash.png')} />
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
                                <div class="cart--finalizar" onClick={()=>HandleBtnEnviar()}>Finalizar o Pedido</div>
                            </div>
                        </div>
                    </aside>
                </PageArea>
        </PageContainer>
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
export default connect(mapStateToProps, mapDispatchToProps) (Produtos);
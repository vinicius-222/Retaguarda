import React, { useState, useEffect }from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SetaBtn from '../SetaBtn';
const MenuLateral = (props) => {
    const [StDashboard, setStStDashboard] = useState (false);
    const [StConfiguracoes, setStStConfiguracoes] = useState (false);
    const [StProdutos, setStProdutos] = useState (false);
    const [StFinanceiro, setStFinanceiro] = useState (false);
    const [StCadastro, setStCadastro] = useState (false);
    const [StFuncionario, setStFuncionario] = useState (false);
    const [StFinanceiroCadas, setStFinanceiroCadas] = useState (false);
    const [StTaxas, setStTaxas] = useState (false);
    const [StRelatorios, setStRelatorios] = useState (false);
    const [StEstoque, setStEstoque] = useState (false);
    const [h, setH] = useState(0);


    useEffect(()=>{
        setH(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    },[document.documentElement.clientHeight])

    return(
        <Container h={h}>
            <aside className={props.StMenu ? 'show' : ''}>
                <div onClick={()=>props.setStMenu(!props.StMenu)} className="Menu-Opem">

                </div>
                <div className={props.StMenu ? 'AreaMenu' : 'AreaMenuClose'} >
                    <div className="Menu">
                        <div className="Areabutton">
                            <Link to="/">
                                <label>Dashboards</label>
                            </Link>
                        </div>
                        <div className="Areabutton" onClick={()=>setStStConfiguracoes(!StConfiguracoes)}>
                            <label>Configurações</label>
                            <SetaBtn StTeste={StConfiguracoes}/>
                        </div>
                        <div className={StConfiguracoes ? "SubMenu ShowMenu": "SubMenu"}>
                            <div className="SubMenuN-1">
                                <Link to="/atalhos">
                                    <label>Atalhos</label>
                                </Link>
                            </div>
                            <div className="SubMenuN-1" onClick={()=>setStCadastro(!StCadastro)}>
                                <label>Cadastro</label>
                                <SetaBtn StTeste={StCadastro}/>
                            </div>
                            <div className={StCadastro ? "SubMenu ShowMenu": "SubMenu"}>
                                <div className="SubMenuN-1 label-1">
                                    <Link to="/contadores">
                                        <label>Contadores</label>
                                    </Link>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <Link to="/adquirente">
                                        <label>Adquirente</label>
                                    </Link>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <Link to="/clientes">
                                        <label>Cliente</label>
                                    </Link>
                                </div>   
                                <div className="SubMenuN-1 label-1">
                                    <Link to="/Fornecedor">
                                        <label>Fornecedores</label>
                                    </Link>
                                </div>   
                                <div className="SubMenuN-1 label-1" onClick={()=>setStFuncionario(!StFuncionario)}>
                                    <label>Funcionarios</label>
                                    <SetaBtn StTeste={StFuncionario}/>
                                </div>   
                                <div className={StFuncionario ? "SubMenu ShowMenu label-1": "SubMenu"}>
                                    <div className="SubMenuN-1 label-1">
                                        <Link to="/Funcionario">
                                            <label>Funcionarios</label>
                                        </Link>
                                    </div>
                                    <div className="SubMenuN-1 label-1">
                                        <Link to="/Cargo">
                                            <label>Cargo</label>
                                        </Link>
                                    </div>
                                    <div className="SubMenuN-1 label-1">
                                        <Link to="/ControleAcesso">
                                            <label>Controle de Acesso</label>
                                        </Link>
                                    </div>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Departamento de Produtos</label>
                                </div>   
                                <div className="SubMenuN-1 label-1">
                                    <label>Categoria de Produtos</label>
                                </div>   
                                <div className="SubMenuN-1 label-1">
                                    <label>Familia de Produtos</label>
                                </div>   
                                <div className="SubMenuN-1 label-1">
                                    <label>Departamento de Impressão</label>
                                </div>     
                            </div>
                            <div className="SubMenuN-1">
                                <label>Dados da Loja</label>
                            </div>
                            <div className="SubMenuN-1" onClick={()=>setStFinanceiroCadas(!StFinanceiroCadas)}> 
                                <label>Financeiro</label>
                                <SetaBtn StTeste={StFinanceiroCadas}/>
                            </div>
                            <div className={StFinanceiroCadas ? "SubMenu ShowMenu": "SubMenu"}>
                                <div className="SubMenuN-1 label-1">
                                    <label>Conta Bancaria</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Forma de Pagamento</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Forma de Recebimento</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Plano de Contas</label>
                                </div>    
                            </div>
                            <div className="SubMenuN-1">
                                <label>Geral</label>
                            </div>
                            <div className="SubMenuN-1">
                                <label>Seletores/Mesa</label>
                            </div>
                            <div className="SubMenuN-1" onClick={()=>setStTaxas(!StTaxas)}>
                                <label>Taxas</label>
                                <SetaBtn StTeste={StTaxas}/>
                            </div>
                            <div className={StTaxas ? "SubMenu ShowMenu": "SubMenu"}> 
                                <div className="SubMenuN-1 label-1">
                                    <label>Taxa de Entrega</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Descontos</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Taxa de Serviços</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Vallet</label>
                                </div>
                            </div>  
                            <div className="SubMenuN-1">
                                <label>Codigo de Barras</label>
                            </div>
                        </div>
                        <div className="Areabutton" onClick={()=>setStProdutos(!StProdutos)}>
                            <label>Produtos</label>
                            <SetaBtn StTeste={StProdutos}/>
                        </div >
                        <div className={StProdutos ? "SubMenu ShowMenu": "SubMenu"}>
                            <div className="SubMenuN-1 label-1">
                                <label>Cadastro de Produtos</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Combos</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Modulo Cardapio</label>
                            </div>
                            <div className="SubMenuN-1 label-1" onClick={()=>setStEstoque(!StEstoque)}>
                                <label>Estoque</label>
                                <SetaBtn StTeste={StEstoque}/>
                            </div>  
                            <div className={StEstoque ? "SubMenu ShowMenu label-1": "SubMenu"}>
                                <div className="SubMenuN-1 label-1">
                                    <label>Aprovar Transferencia de Estoque</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Inventario</label>
                                </div>
                                <div className="SubMenuN-1 label-1">
                                    <label>Transferencia de Estoque</label>
                                </div>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Importção de Produtos</label>
                            </div>  
                            <div className="SubMenuN-1 label-1">
                                <label>Produção Interna</label>
                            </div>  
                        </div>
                        <div className="Areabutton" onClick={()=>setStFinanceiro(!StFinanceiro)}>
                            <label>Financeiro</label>
                            <SetaBtn StTeste={StFinanceiro}/>
                        </div>
                        <div className={StFinanceiro ? "SubMenu ShowMenu": "SubMenu"}>
                            <div className="SubMenuN-1 label-1">
                                <label>Apuração de Caixa</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Contas a Pagar</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Contas a Receber</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Notas Fiscais</label>
                            </div>
                            <div className="SubMenuN-1 label-1">
                                <label>Notas Fiscais - NF-e</label>
                            </div>
                        </div>
                        <div className="Areabutton" onClick={()=>setStRelatorios(!StRelatorios)}>
                            <label>Relatorios</label>
                            <SetaBtn StTeste={StRelatorios}/>
                        </div>
                    </div>
                </div>
            </aside>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        StMenu:state.user.StMenu,
        StArrow:state.user.StArrow
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setStMenu:(StMenu)=>dispatch({type:'SET_MENU', payload:{StMenu}}),
        setStArrow:(StArrow)=>dispatch({type:'SET_ARROW', payload:{StArrow}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MenuLateral);
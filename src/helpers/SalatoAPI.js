import Cookies from 'js-cookie';
import qs from 'qs';
import { doLogout } from '../helpers/AuthHandler';

//const URL = 'http://192.168.1.65';
const URL = 'https://salato.com.br';
const BASEAPI = URL+'/backEndSalato';
export const BASEAPIIMAGE = BASEAPI+'/Images/';
export const BASEAPIVIDEO = 'https://salato.com.br/backEndSalato/Images/Video/';

const apiFetchFile = async (endpoint, body) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        body
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPost = async (endpoint, body) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });

    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href = '/Login';
        return;
    }

    return json;
}
const apiFetchGet = async (endpoint, body = []) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchGetEnd = async (endpoint, body = []) => {
   
    const res = await fetch(`${endpoint}`);
    const json = await res.json();

    return json;
}
const apiFetchDelete = async (endpoint, body = []) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPut = async (endpoint, body = []) => {

    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const SalatoAPI = {
    login:async (email, pass) => {
        const json = await apiFetchPost(
            '/user/getlogin', 
            {email,pass}
        )
        return json;
    },

    newLogin:async (NmPessoa, DsLogin, pass) => {
        const json = await apiFetchPost(
            '/user/new_recordRepresentante', 
            {NmPessoa, DsLogin, pass}
        )
        return json;
    },

    getLojas:async()=>{
        let json = [{"Nome":"Salato Alimentos Mage", "Status":false},
                    {"Nome":"Salato Alimentos Piabeta", "Status":false},
                    {"Nome":"Salato Alimentos Teresopolis", "Status":false},
                    {"Nome":"Salato Alimentos Petropolis", "Status":false}];
        return json;
    },

    getCargos:async()=>{
        let json = [{"Nome":"Administrativo", "Status":false},
                    {"Nome":"Caixa", "Status":false},
                    {"Nome":"Garçon", "Status":false},
                    {"Nome":"Entregador", "Status":false},
                    {"Nome":"Gerente", "Status":false}];
        return json;
    },

    getFuncionario:async()=>{
        let json = [{"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"},
                    {"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"},
                    {"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"},
                    {"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"},
                    {"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"},
                    {"Funcionario":"Severina Francisca", "CPF":"000.000.000-90", "Cargo":"Administrativo", "Telefone":"21 964487209","Status":"Ativo"}];
        return json;
    },

    getProdutoBanner:async (NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto) => {
        const json = await apiFetchGet(
            '/pedidos/getProdutoBanner',
            {NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto}
        )
        return json;
    },

    getProdutoPesquisa:async (NmProduto, IdPreco = 1) => {
        const json = await apiFetchGet(
            '/pedidos/getInfoProduto',
            {NmProduto, IdPreco}
        )
        return json;
    },

    getImagesBanner:async () => {
        const json = await apiFetchGet(
            '/pedidos/getInfoTelaPrincipal'
        )

        return json;
    },

    senEmail:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    sendEmailTradellus:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    getGrupoProduto:async (StSite = 1, StPersonalizado = 0, StAnalitico = 0) => {
        const json = await apiFetchGet(
            '/pedidos/getGrupoProduto',
            {StSite, StPersonalizado, StAnalitico}
        )
        return json;
    },

    getCarCompra:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getCarCompra',
            {jwt}
        )
        return json;
    },

    insertCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPost(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )
        return json;
    },

    deleteCarCompra:async (jwt, IdProduto) => {
        const json = await apiFetchDelete(
            '/pedidos/deleteCarCompra',
            {jwt, IdProduto}
        )
        return json;
    },

    updateCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPut(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )

        return json;
    },

    getCountCar:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/InsertCarCompras',
            {jwt}
        )
        return json;
    },

    getEndereco:async (cep) => {
        let CEP = cep.replace('.','');
        const json = await apiFetchGetEnd(
            'https://ws.apicep.com/cep/'+CEP+'.json'
        )
        return json;
    },

    getRepresentadas:async () => {
        const json = await apiFetchGet(
            '/user/getRepresentada',
            {}
        )
        return json;
    },

    getInfoCliente:async (NmPessoa, jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getInfoClienteCompleto',
            {jwt, NmPessoa}
        )
        return json;
    },

    getInfoTelefone:async (DsTelefone, jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getInfoCadastroCliente',
            {jwt, DsTelefone}
        )
        return json;
    },

    setPedidoDeVenda:async(IdPedidoDeVenda, CdChamada, IdPessoa, DtPedido, DtEntrega, IdEmpresa, VlPedido,TpPedido, IdCondicaoPagamento, VlTotalPedido, DsObservacao, jwt, itensPedido, IdRepresentada) => {
        const json = await apiFetchPost(
            '/pedidovenda/setPedidos',
            {
                "IdPedidoDeVenda":IdPedidoDeVenda,
                "CdChamada":CdChamada,
                "IdPessoa":IdPessoa,
                "DtPedido":DtPedido,
                "DtEntrega":DtEntrega,
                "IdEmpresa":IdEmpresa,
                "VlPedido":VlPedido,
                "TpPedido":TpPedido,
                "IdCondicaoPagamento":IdCondicaoPagamento,
                "VlTotalPedido":VlTotalPedido,
                "itensPedido":itensPedido,
                "DsObservacao":DsObservacao,
                "IdRepresentada":IdRepresentada,
                "jwt":jwt
            }
        )
        return json;
    },

    getCondicaoPagamento:async () =>{
        const json = await apiFetchGet(
            '/pedidos/getPagamento',
            {}
        )
        return json;
    },

    getCode:async(TableName, FieldName) =>{
        const json = await apiFetchGet(
            '/pedidos/GetCode',
            {TableName,FieldName}
        )
        return json;
    },

    getPedidosDeVenda:async(idPessoaVendedor, dtinicialEmi, dtfinalEmi, dtinicialEnt, dtfinalEnt,TpPedido, NmPessoa, per_page, excludes, jwt)=>{
        const json = await apiFetchGet(
            '/pedidos/getPedidoDeVenda',
            {idPessoaVendedor,
            dtinicialEmi,
            dtfinalEmi,
            dtinicialEnt,
            dtfinalEnt,
            TpPedido,
            NmPessoa,
            per_page,
            excludes,
            jwt}
        )
        return json;
    },

    getPedidoDeVendaItens:async(IdPedidoDeVenda, jwt, hash)=>{
        const json = await apiFetchGet(
        '/pedidovenda/getPedidoDeVendaItems',
        {IdPedidoDeVenda,
        jwt,
        hash}
        )
        return json;
    },

    addProduto:async(NmProduto,IdGrupoProduto,QtEstoque,IdUnidadeVenda,TpProduto,StAtivo,LinckImage,DsTitulo,DsProdutoSite,VlPreco)=>{
        const json = await apiFetchPost(
            '/produto/handleProdutos',
            {
                NmProduto,
                IdGrupoProduto,
                QtEstoque,
                IdUnidadeVenda,
                TpProduto,
                StAtivo,
                LinckImage,
                DsTitulo,
                DsProdutoSite,
                VlPreco
            }
        )
        return json;
    },

    updateProduto:async(IdProduto, NmProduto,IdGrupoProduto,QtEstoque,IdUnidadeVenda,TpProduto,StAtivo,LinckImage,DsTitulo,DsProdutoSite,VlPreco)=>{
        const json = await apiFetchPut(
            '/produto/handleProdutos',
            {   
                IdProduto,
                NmProduto,
                IdGrupoProduto,
                QtEstoque,
                IdUnidadeVenda,
                TpProduto,
                StAtivo,
                LinckImage,
                DsTitulo,
                DsProdutoSite,
                VlPreco
            }
        )
        return json;
    },

    deleteProduto:async(IdProduto)=>{
        const json = await apiFetchDelete(
            '/produto/handleProdutos',
            {IdProduto}
        )
        return json;
    },

    getProduto:async(jwt, hash, NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto)=>{
        const json = await apiFetchGet(
            '/produto/handleProdutos',
            {   
                jwt,
                hash,
                NmProduto, 
                IdPreco, 
                per_pages, 
                StPaginaInicial, 
                offset, 
                idGrupoProduto, 
                IdProduto
            }
        )
        return json;
    },

    addCliente:async(NmPessoa,CdCPF_CNPJ,DsPessoaContatoCobranca,DsEmailCobranca,DsTeleFoneCobranca,DsFaxCobranca,DtCadastro,StAtivo,VlLimiteCredito,StInadimplente,StVendaBloqueada)=>{
        const json = await apiFetchPost(
            '/cliente/handleCliente',
            {
                NmPessoa,
                CdCPF_CNPJ,
                DsPessoaContatoCobranca,
                DsEmailCobranca,
                DsTeleFoneCobranca,
                DsFaxCobranca,
                DtCadastro,
                StAtivo,
                VlLimiteCredito,
                StInadimplente,
                StVendaBloqueada,
            }
        )
        return json;
    },

    updateCliente:async(IdPessoa, NmPessoa,CdCPF_CNPJ,DsPessoaContatoCobranca,DsEmailCobranca,DsTeleFoneCobranca,DsFaxCobranca,DtCadastro,StAtivo,VlLimiteCredito,StInadimplente,StVendaBloqueada)=>{
        const json = await apiFetchPut(
            '/cliente/handleCliente',
            {
                IdPessoa,
                NmPessoa,
                CdCPF_CNPJ,
                DsPessoaContatoCobranca,
                DsEmailCobranca,
                DsTeleFoneCobranca,
                DsFaxCobranca,
                DtCadastro,
                StAtivo,
                VlLimiteCredito,
                StInadimplente,
                StVendaBloqueada,
            }
        )
        return json;
    },

    deleteCliente:async(IdPessoa)=>{
        const json = await apiFetchDelete(
            '/cliente/handleCliente',
            {
                IdPessoa
            }
        )
        return json;
    },
    
    getCliente:async(NmPessoa)=>{
        const json = await apiFetchGet(
            '/cliente/handleCliente',
            {
                NmPessoa
            }
        )
        return json;
    },

    getParticipantes:async(jwt)=>{
        const json = await apiFetchGet(
            '/cliente/getParticipantes',
            {jwt}
        )
        return json;
    }
}

export default () => SalatoAPI;
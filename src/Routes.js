import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Login from './pages/Login';
import Atalhos from './pages/Atalhos';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Clientes from './pages/Clientes';
import Fornecedor from './pages/Fornecedor';
import Contadores from './pages/Contadores';
import CreateContador from './pages/Contadores/Create';
import Historico from './pages/Contadores/Historico'
import Adquirente from './pages/Adquirente';
import CreateAdquirente from './pages/Adquirente/Create';
import CreateCliente from './pages/Clientes/Create';
import CreateFornecedor from './pages/Fornecedor/Create';
import Funcionario from './pages/Funcionario';
import CreateFuncionario from './pages/Funcionario/Create';

export default () => {
    return(
        <Switch>
            <RouteHandler  exact path='/Login'>
                <Login />
            </RouteHandler>
            <RouteHandler  private exact path='/Contadores'>
                <Contadores />
            </RouteHandler>
            <RouteHandler  private exact path='/'>
                <Home />
            </RouteHandler>
            <RouteHandler  private exact path='/Atalhos'>
                <Atalhos />
            </RouteHandler>
            <RouteHandler  private exact path='/Contadores/Create'>
                <CreateContador />
            </RouteHandler>
            <RouteHandler  private exact path='/Contadores/Historico'>
                <Historico />
            </RouteHandler>
            <RouteHandler  private exact path='/Adquirente'>
                <Adquirente />
            </RouteHandler>
            <RouteHandler  private exact path='/Adquirente/Create'>
                <CreateAdquirente />
            </RouteHandler>
            <RouteHandler  private exact path='/Clientes'>
                <Clientes />
            </RouteHandler>
            <RouteHandler  private exact path='/Clientes/Create'>
                <CreateCliente />
            </RouteHandler>
            <RouteHandler  private exact path='/Fornecedor'>
                <Fornecedor />
            </RouteHandler>
            <RouteHandler  private exact path='/Fornecedor/Create'>
                <CreateFornecedor />
            </RouteHandler>
            <RouteHandler  private exact path='/Funcionario'>
                <Funcionario />
            </RouteHandler>
            <RouteHandler  private exact path='/Funcionario/Create'>
                <CreateFuncionario />
            </RouteHandler>
            <RouteHandler>
                <Login />
            </RouteHandler>
        </Switch>
    )
}
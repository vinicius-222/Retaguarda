import styled from 'styled-components';

export const PageContainer = styled.div`
    width:100%;
    margin:auto;

    .AreaCarrinho{
        width:0%;
        
    }
    @media(max-width:600px){
        margin:0px;

    }

`;

export const PageArea = styled.div`
display:flex;
padding-left:5px;
background-color:#FFF;
    aside {
        width:0%;
        height:0;
        font-family:'Hepta Slab', Helvetica, Arial;
        transition:all ease .2s;
        overflow-x:hidden;
        border:1px solid #FFFFFF;   
        background-color:#ffffff;

        .cart--area {
            padding:20px;
            
            .cart--cep{
                display:flex;
                margin:10px 0px;

                .cart--loadingCEP{
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    width:40px;
                    height:25px;
                    padding-top:5px;

                }
                
                .cart--cepInfo{
                    
                    input{
                        border:1px solid #CCC;
                        border-radius:5px;
                        height:25px;
                        width:105px;
                        outline:0;
                        padding:5px;
                    }
                }
                .cart--check{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-left:10px;

                    img{
                        height:15px;
                        width:15px;
                    }
                }
                
            }

            .cart--end{
                color:#79b9dd;
                font-size:12px;
            }
            .menu-closer1{
                cursor:pointer;
                display:flex;
            }

            .menu-closer2{
                cursor:pointer;
                display:none;
                height:30px;
                width:140px;
                background-color:#48d05f;
                border:1px solid #00FF00;
                border-radius:8px;
                font-size:12px;
                font-weight:bold;
                color:#FFF;
                justify-content:center;
                align-items:center;
            }

            .cart {
                margin-bottom:20px;
                display:flex;
                flex-direction:column;
                width:100%;
                .cart--itens{
                    border-bottom:1px solid #CCC;
                    
                    .cart--products{
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                        height:55px;
                        width:100%;

                        img{
                            height:40px;
                            width:40px;
                            border-radius:5px;
                        }
                        span{
                            margin-left:5px;
                            font-size:11px;
                        }
                    }

                    .ProdutoInfo--pricearea{
                        display:flex;
                        align-items:center;
                        margin-bottom:5px;
                        
                        
                        .ProdutoInfo--price {
                            display:flex;
                            align-items:center;
                            justify-content:space-between;
                            width:100%;

                            .ProdutoInfo--btnremover{
                                display:flex;
                                margin-left:10px;
                                align-items:center;
                                cursor:pointer;
                    
                                img{
                                    height:20px;
                                    width:20px;
                                    margin-right:5px;
                                }
                            }
                        }
                        .ProdutoInfo--actualPrice {
                            font-size:14px;
                            margin-left:20px;
                        }
                        .ProdutoInfo--qtarea {
                            display:inline-flex;
                            background-color:#EEE;
                            border-radius:10px;
                            height:30px;
                        }
                        .ProdutoInfo--qtarea button {
                            border:0;
                            background-color:transparent;
                            font-size:17px;
                            outline:0;
                            cursor:pointer;
                            padding:0px 10px;
                            color:#333;
                        }
                        .ProdutoInfo--qt {
                            line-height: 30px;
                            font-size: 12px;
                            font-weight: bold;
                            padding: 0px 5px;
                            color:#000;
                        }
                        .ProdutoInfo--addButton {
                            margin-top:30px;
                            padding:20px 30px;
                            border-radius:20px;
                            background-color:#48d05f;
                            color:#FFF;
                            display:inline-block;
                            cursor:pointer;
                            margin-right:30px;
                        }
                        .ProdutoInfo--addButton:hover {
                            background-color:#32a345;
                        }
                        .ProdutoInfo--cancelButton {
                            display:inline-block;
                            cursor:pointer;
                        }
                        .ProdutoInfo--cancelMobileButton {
                            display:none;
                            height:40px;
                            text-align:center;
                            line-height: 40px;
                            margin-bottom:30px;
                        }
                    }
                }
            }
            .cart--details{
                display:flex;
                flex-direction:column;

                .cart--totalitem {
                    padding:15px 0;
                    border-top:1px solid #79b9dd;
                    color:#315970;
                    display:flex;
                    justify-content: space-between;
                    font-size:15px;
                }
                .cart--totalitem span:first-child {
                    font-weight: bold;
                }
                .cart--totalitem.big {
                    font-size:20px;
                    color:#000;
                    font-weight: bold;
                }
                .cart--finalizar {
                    padding:20px 30px;
                    border-radius:20px;
                    background-color:#48d05f;
                    color:#FFF;
                    cursor:pointer;
                    text-align:center;
                    margin-top:20px;
                    border:2px solid #63f77c;
                    transition: all ease .2s;
                }
                .cart--finalizar:hover {
                    background-color:#35af4a;
                }

            }
        }

        .AreaDados{
            display:flex;
            flex-direction:column;

            .AreaData{
                display:flex;
                justify-content:space-between;
             
                .AreaData--AreaData{
                    border-bottom:1px solid #CCC;
                    flex-direction:column;
                    margin-bottom:10px;
                    display:flex;
                    width:100%;
                    height:auto;
                    backgrounf-color:#FF0000;
                    
                    h4{
                        margin:10px 0px;
    
                    }
    
                    input{
                        padding:0px 5px;
                        margin-bottom:10px;
                        border:1px solid #CCC;
                        height:30px;
                        width:85%;
                        color:#999;
                        font-size:16px;
                        border-radius:5px;
                        background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #eeeeee;  /* Imagem de fundo (Seta) */
                        background-position: 100% center;  /*Posição da imagem do background*/
                    }
                    .AreaPic{
                        position:relative;
                        right:130px;
                        background-color:#FFF;
                        box-shadow:1px 0px 0px 1px #CCC;
                        border-radius:3px;
                    }
                }
            }

            .AreaCleinte{
                display:flex;
                border-bottom:1px solid #CCC;
                margin-top:5px;
                flex-direction:column;
                justify-content:center;
                align-items:flex-start;
                max-height:100px;
                width:100%;

                h4{
                    margin:0px;
                }
                

                .AreaCleinte--SubClientes{
                    flex-direction:row;
                    justify-content:center;
                    align-items:center;
                    border-bottom:0px solid #CCC;

                    .AreaNmCliente{
                        justify-content:flex-start;
                        padding:10px 5px;
                        align-items:center;
                        display:flex;
                        min-height:10px;
                        border:0.5px solid #CCC;
                        background-color:#EEE;
                        border-radius:5px;
                        height:100%;
                        width:90%;
                        margin:10px 0px;
                        color:#999;
                    }
                    
                    .AreaImagenLupa{
                        margin-left:10px;
                        cursor:pointer;
                        display:flex;
                        img{
                            height:25px;
                            width:25px;
                        }
                    }
                }
            }

            .AreaCondicaoPagamento{
                flex-direction:row;
                justify-content:center;
                align-items:center;
                border-bottom:1px solid #CCC;

                h4{
                    margin:10px 0px;
                }

                select{
                    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
                    -moz-appearance: none; /* Remove estilo padrão do FireFox */
                    appearance: none; /* Remove estilo padrão do FireFox*/
                    background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #eeeeee;  /* Imagem de fundo (Seta) */
                    background-position: 100% center;  /*Posição da imagem do background*/
                    width: 100%; /* Tamanho do select, maior que o tamanho da div "div-select" */
                    height:30px; /* Altura do select, importante para que tenha a mesma altura em todo os navegadores */
                    border:1px solid #999;
                    padding:0px 10px
                    margin-bottom:10px;
                    color:#838B8B;
                    font-size:16px;
                    option{
                        
                    }

                }
            }
        }
    }

    .AreaList{
        display:flex;
        width:100%;
        background-color:#FFF;
        flex-direction:column;
        border:1px solid #CCC;
        margin-left:0px;  
        margin-top:10px;
        border-radius:5px;
        box-shadow:1px 4px 5px 1px #EEE;

        .AreaGrupo{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:auto;
            padding:10px; 
            
            .ItemGrupo{
                cursor:pointer;
                transition:all ease 0.5s;
                font-size:22px;

            }
            .ItemGrupo:hover{
                color:#0000FF;
            }
        }

        .AreaListTopo{
            display:flex;
            height:45px;
            width:100%;
            background-color:#EEE;
            border-bottom:1px solid #CCC;
            margin-bottom:5px;
            justify-content:space-between;

            h3{
                color:#0000CD;
                margin-left:20px;
                font-family:Sans serif;
                color:#696969;
            }
            .AreaButton{
                margin-right:20px;
                width:40px;
                display:flex;
                justify-content:center;
                align-items:center;
                cursor:pointer;

                img{
                    width:30px;
                    height:30px;
                }
            }
        }
        .list{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            border-radius:5px;
            margin-bottom:10px;
            
            .adItem{
                display:block;
                width:98%;
            }

            .AreaLoading{
                display:flex;
                height:400px;
                width:100%;
                background-color:#fff;
                flex-direction:row;
                justify-content:center;
                align-items:center;
            }
        }
    }

    .pagination{
        display:flex;
        flex-wrap:wrap;
        flex:1;
        justify-content:flex-end;
        align-items:flex-start;
        margin:0px 0px;
        padding-right:50px;

        .pagItem{
            display:flex;
            justify-content:center;
            align-items:center;
            height:30px;
            width:30px;
            border:1px solid #0000CD;
            margin:1px;
            cursor:pointer;

        }
        .active{
            background-color:#CCC;
        }
    }

    .show {
        width:35%;
        height:100%;
        border:1px solid #EEE;   
    }

    @media(max-width:600px){
        display:block;
        margin:auto;
        padding-left:0px;
        aside{
            .cart--area {
                width:100%;
                .menu-closer1{
                    display:none;
                }
    
                .menu-closer2{
                    display:flex;
                }
            }
            .cart .cart--itens .ProdutoInfo--pricearea .ProdutoInfo--price{
                justify-content:space-between;  
                width:100%;
            }
        }
        .show {
            display:flex;
            position:fixed;
            flex-direction:row;
            top:0;
            right:0;
            bottom:0;
            width:100%;
            border-radius:10px;
            border:1px solid #FFFFFF;   
            background-color:#FFF;
        }
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:100%;

    .WindowArea {
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-color:transparenr;
        display:none;
        transition:opacity ease 5s;
        justify-content: center;
        align-items: center;
        overflow-y:auto;

        .WindowBody {
            width:900px;
            opacity:0;
            background-color:#FFF;
            border-radius:10px;
            box-shadow:0px 0px 15px #999;
            display:flex;
            margin:20px 0px;
            transition:all ease .5s;
        }
        .ProdutoBig{
            flex:1;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    
        .ProdutoBig img {
            height:250px;
            width:auto;
            border-radius:5px;
            box-shadow:1px 1px 5px #CCC;
        }
        .ProdutoInfo {
            flex:1;
            font-family:'Hepta Slab', Helvetica, Arial;
            padding-bottom:50px;
        }
        .ProdutoInfo h2 {
            margin-top:50px;
        }
        .ProdutoInfo .ProdutoInfo--desc {
            font-size:15px;
            color:#999;
            margin-top:10px;
            font-family:'Lato',Helvetica,Arial;
        }
        .ProdutoInfo--sector {
            color:#CCC;
            text-transform: uppercase;
            font-size:14px;
            margin-top:30px;
            margin-bottom:10px;
        }
        
        .ProdutoInfo--price {
            display:flex;
            align-items:center;  
        }
       
        .ProdutoInfo--actualPrice {
            font-size:28px;
            margin-right:30px;
        }
        .ProdutoInfo--qtarea {
            display:inline-flex;
            background-color:#EEE;
            border-radius:10px;
            height:30px;
        }
        .ProdutoInfo--qtarea button {
            border:0;
            background-color:transparent;
            font-size:17px;
            outline:0;
            cursor:pointer;
            padding:0px 10px;
            color:#333;
        }
        .ProdutoInfo--qt {
            line-height: 30px;
            font-size: 12px;
            font-weight: bold;
            padding: 0px 5px;
            color:#000;
        }
        .ProdutoInfo--addButton {
            margin-top:30px;
            padding:20px 30px;
            border-radius:20px;
            background-color:#48d05f;
            color:#FFF;
            display:inline-block;
            cursor:pointer;
            margin-right:30px;
        }
        .ProdutoInfo--addButton:hover {
            background-color:#32a345;
        }
        .ProdutoInfo--cancelButton {
            display:inline-block;
            cursor:pointer;
        }
        .ProdutoInfo--cancelMobileButton {
            display:none;
            height:40px;
            text-align:center;
            line-height: 40px;
            margin-bottom:30px;
        }
    }
    
    .ModalCliente {
        position:fixed;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-color:transparent;
        display:none;
        transition:opacity ease 5s;
        justify-content: center;
        align-items: center;
        overflow-y:auto;

        .ClienteWindowBody {
            display:flex;
            flex-direction:column;
            height:600px;
            width:900px;
            opacity:0;
            background-color:#FFF;
            border-radius:10px;
            box-shadow:0px 0px 3px #999;
            margin:20px 0px;
            transition:all ease .5s;
        }
        .AreaButtonCliente{
            display:flex;
            height:70px;
            align-items:flex-end;
            justify-content:flex-end;
            border-top:1px solid #CCC;
            background-color:#EEE;
            border-bottom-left-radius:5px;
            border-bottom-right-radius:5px;

        }
        .cancelButton{
            display:flex;
            justify-content: center;
            align-items: center;
            height:35px;
            width:100px;
            background-color:#CD3333;
            border-radius:5px;
            margin-right:40px;
            color:#FFF;
            font-family:sans serif;
            font-weight:bold;
            margin-bottom:10px;
            cursor:pointer;
        }
        .AreaPesquisaCliente{
            display:flex;
            height:auto;
            width:100%;
            background-color:#EEE;
            border-bottom:1px solid #CCC;
            justify-content:center;
            align-items:center;
            border-top-left-radius:5px;
            border-top-right-radius:5px;

            form{
                display:flex;
                flex:1;
                justify-content:center;
                align-items:center;
                
                input{
                    padding:0px 10px
                    height:38px;
                    width:80%;
                    border-radius:5px;
                    border:1px solid #999;
                    margin:0px 10px;
                    font-size:18px;
                    outline:0

                &:focus{
                    border:1px solid #FF0000;
                }
                }

                button{
                    margin:0px 10px;
                    background-color:#0089FF;
                    font-size:15px;
                    border:0;
                    border-radius:5px;
                    color:#FFF;
                    height:40px;
                    padding:0 20px;
                    cursor:pointer;
                }
                button:hover{
                    background-color:#006FCE;
                }
            }
            
        }

        .AreaListClientes{
            display:block;
            height:100%;
            width:100%;
            overflow:scroll;
            
            .AreaLoading{
                display:flex;
                justify-content: center;
                align-items: center;
                flex:1;
                height:100%;
            }
            .LineCliente{
                display:flex;
                justify-content:space-between;
                margin:5px 0px;
                margin-left:10px;
                align-items:center;
                height:30px;
                width:96%;
                flex-direction:row;
                border:0.5px solid #CCC;
                border-radius:5px;
                padding:0px 5px;
                transition:all ease .2s;
                &:hover {
                    background-color:#D3D3D3;
                    border:1px solid #0000CD;
                }

                .btnInserir{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-left:10px;
                    height:90%;
                    width:100px;
                    color:#FFF;
                    border-radius:8px;
                    background-color:#48d05f;
                    cursor:pointer;
                    transition: all ease .2s;
                }
                .btnInserir:hover {
                    background-color:#35af4a;
                }
                .AreaNmPessoa{
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    height:30px;
                    flex-direction:row;
                    color:#696969;
                }
            }
        }
    } 

    .AreaPesquisa {
        margin-top:10px;
        margin-left:5px;
        height:70px;
        width:99.6%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#EEE;
        border-top:1px solid #999;
        border-bottom:1px solid #999;

        .AreaLocalizacaoArea{
            form{
                display:flex;
                flex:1;
                input{
                    padding:0px 10px
                    height:38px;
                    outline:0px;
                    width:300px;
                    border-radius:5px;
                    border:1px solid #999;
                    margin:0px 10px;
                    font-size:18px;
                }
                select{
                    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
                    -moz-appearance: none; /* Remove estilo padrão do FireFox */
                    appearance: none; /* Remove estilo padrão do FireFox*/
                    background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #eeeeee;  /* Imagem de fundo (Seta) */
                    background-position: 565px center;  /*Posição da imagem do background*/
                    width: 600px; /* Tamanho do select, maior que o tamanho da div "div-select" */
                    height:40px; /* Altura do select, importante para que tenha a mesma altura em todo os navegadores */
                    border:1px solid #999;
                    padding:0px 10px
                    color:#838B8B;
                    font-size:18px;
                    outline:0px;
                    option{
                        
                    }

                }
                button{
                    margin:0px 10px;
                    background-color:#0089FF;
                    font-size:15px;
                    border:0;
                    border-radius:5px;
                    color:#FFF;
                    height:40px;
                    padding:0 20px;
                    cursor:pointer;
                }
                button:hover{
                    background-color:#006FCE;
                }
            }   
        }   
    }

    @media (max-width:800px){
        .AreaPesquisa{
            height:150px;

            .AreaLocalizacaoArea{
                display:flex;
                width:700px;
                form {
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;

                    input, select, button {
                        width:600px;
                        padding:0px;
                        margin:5px;
                    }
                }
            }
        }
    } 
    
    @media (max-width:600px){
        .WindowArea{

            .WindowBody{
                flex-direction:column;
                width:100%;
                height:100%;
                padding:20px;
                justify-content:center;
                align-items:center;
            }
            
        }

        .ModalCliente{

            .ClienteWindowBody{
                flex-direction:column;
                width:100%;
                height:100%;
                justify-content:center;
                align-items:center;

                .AreaPesquisaCliente{
                    width:100%;
                }

                .AreaListClientes{

                    .LineCliente{
                        padding:5px 5px;
                        .AreaNmPessoa{
                            flex-wrap:wrap;
                            width:100%;
                            height:100%;
                        }

                        .btnInserir{
                            width:100px;
                        }
                    }

                }

                .AreaButtonCliente{
                    width:100%;
                }
            }
        }
        .AreaPesquisa{
            height:150px;
            margin-left:0px;

            .AreaLocalizacaoArea{
                display:flex;
                width:90%;
                form {
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;

                    input, select, button {
                        width:100%;
                        margin:5px;
                    }
                    select {
                        background-position: 99% center;
                        font-size:14px;
                        padding:0px 5px;
                    }
                    input {
                        font-size:14px;
                        padding:0px 5px;
                    }
                }
            }
        }
        .AreaList{
            padding:0px;
            .list{
                display:flex;

                justify-content:center;
                align-items:center;
                width:100%;
                flex-wrap:wrap;
                border-radius:5px;
                margin-bottom:10px;

                .adItem{
                    flex-direction:column;
                    width:95%;
                }
            }
        }
    } 
`;
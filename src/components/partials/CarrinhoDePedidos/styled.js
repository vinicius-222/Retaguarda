import styled from 'styled-components';


export const PageArea = styled.div`
    display:flex;
    background-color:#FFF;

    aside {
        width:0px;
        height:0px;
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
                            margin-left:30px;
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

        .AreaCleinte{
            display:flex;
            justify-content:center;
            align-items:center;
            max-height:70px;
            width:95%;
            border:0.5px solid #CCC;
            padding:10px;
            border-radius:5px;

            .AreaNmCliente{
                justify-content:flex-start;
                padding:10px 5px;
                align-items:center;
                display:flex;
                border:0.5px solid #CCC;
                border-radius:5px;
                height:100%;
                width:90%;
                margin:10px;
                color:#999;
            }
            
            .AreaImagenLupa{
                cursor:pointer;
                display:flex;
                img{
                    height:25px;
                    width:25px;
                }
            }
        }
    }
    .show {
        width:350px;
        height:100%;
        border:1px solid #EEE;   
    }
`;
import styled from 'styled-components';


export const HeaderArea = styled.div`
    display:flex;
    height:60px;

    .container {
        display:flex;
        flex:1;
        flex-direction:row;
        background-color:#3C3C3B;
        color:#000;
        font-size:12px;
    }
    
    .logo{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        margin-left:10px;
        height:60px;

        a{
            display:flex;
            align-items:center;
            justify-content:flex-start;

            img {
                margin-left:0px;
                height:40px;
            }
        }
    }

    .areaInfo{
        display:flex;
        width:170px;
        background-color:#000E2D;
        justify-content:space-between;
        align-items:center;
        cursor:pointer;

        .imagenPerfil{
            width:35px;
            height:35px;
            margin-left:20px;
        }
        .userName{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#FFF;
            font-size:20px;
        }
    }

    .AreaMenu{
        display:flex;
        position:absolute;
        top:60px;
        right:0;
        background-color:#222222;
        transition:all ease 0.8s;
        
        .Menu{
            display:flex;
            height:100px;
            width:170px;
            transition:all ease 0.4s;
            flex-direction:column;

            div{
                opacity:0;
                display:flex;
                width:100%;
                height:50px;
                justify-content:center;
                align-items:center;
                transition:all ease 0.3s;

                a, button{
                    opacity:1;
                    border:0px;
                    background:none;
                    cursor:pointer;
                    outline:100px;
                    display:flex;
                    font-size:16px;
                    justify-content:center;
                    align-items:center;
                    height:100%;
                    width:100%;
                    text-decoration:none;
                    color:#FFF;
                    border-bottom:0.1px solid #6A6A6A;
                    transition:all ease 0.8s;
                }

                &:hover{
                    background-color:#6A6A6A;
                }
            }
        }

        .MenuInative{
            display:flex;
            height:0px;
            width:170px;
            transition:all ease 0.4s;

            div{
                display:none;

                a{
                    display:none;
                    text-decoration:none;
                    color:#FFF;
                    border-bottom:0.1px solid #CCC;
                    transition:all ease 0.8s;
                }
            }
        }
    }

    @media (max-width:600px){
        height:130px;

        .logo{
            background-color:#FFF;
            img{
                margin:5px 0px;
            }
        }

        .container{
            background-color:#FFF;
            flex-direction:column;
            margin-left:0px;
            
            .AreaDetail{
                align-items:center;
                justify-content:space-between;
                margin-bottom:5px;
                
                .AreaMenu{
                    display:flex;
                    height:25px;
                    width:25px;
    
                    img{
                        height:25px;
                        width:25px;
                    }
                }

                .AreaCarrinho{
                    position:fixed;
                    right:5px;
                    top:10px;
                    margin-left:70px;
                }
            }
        }
    }
`;
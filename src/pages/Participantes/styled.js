import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
    height:400px;
    width:100%;
    padding:5px;

    .WindowArea{
        display:none;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:1;
        background-color:transparent;
        transition:all ease .5s;
        justify-content:center;
        align-items:center;
        overflow-y:auto;

        .areaFechar{
            display:flex;
            position:absolute;
            justify-content:center;
            align-items:center;
            color:#FFF;
            width:30px;
            height:30px;
            border-radius:15px;
            background-color:#FF0000;
            cursor:pointer;
            top:-35px;
            right:-35px;
        }
        .WindowBody{
            display:block;
            position:fixed;
            flex-direction:column;
            background-color:#000;
            width:900px;
            height:550px;
            opacity:0;
            border-radius:10px;
            display:flex;
            margin:20px 0px;
            padding:2px;
            transition:all ease .5s;
        }
    }
    .WindowAreaEndereco{
        display:none;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:1;
        background-color:transparent;
        transition:all ease .5s;
        justify-content:center;
        align-items:center;
        overflow-y:auto;

        .areaFechar{
            display:flex;
            position:absolute;
            justify-content:center;
            align-items:center;
            color:#FFF;
            width:30px;
            height:30px;
            border-radius:15px;
            background-color:#FF0000;
            cursor:pointer;
            top:-35px;
            right:-35px;
        }
        .WindowBodyEndereco{
            display:block;
            position:fixed;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background-color:#FFF;
            width:500px;
            height:500px;
            opacity:0;
            border-radius:10px;
            display:flex;
            margin:20px 0px;
            padding:2px;
            transition:all ease .5s;

            .area{
                display:flex;
                flex-direction:column;
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:50px;
                margin:2px;


                .area--dados{
                    display:flex;
                    
                    .area--title{
                        display:flex;
                        flex-direction:row;
                        justify-content:flex-end;
                        width:200px;
                    }
    
                    .area--data{
                        display:flex;
                        flex-direction:row;
                        width:300px;
                        margin-left:10px;
                        margin-right:10px;
                        flex-wrap:wrap;
                    }
                }
            }
        }
    }

    .AreaPesquisa{
        display:flex;
        justify-content:center;
        align-items:center;
        height:70px;
        border-top:1px solid #CCC;
        border-bottom:1px solid #CCC;
        width:99.7%;
        background-color:#EEE;

        form{
            height:auto;
            display:flex;
            justify-content:center;
            align-items:center;

            input{
                padding:5px;
                height:30px;
                width:550px;
                border-radius:5px;
                autline:0;
                border:1px solid #999;
                font-size:18px;
                padding:5px;
                outline:0;
                transition:ease all 0.5s;
                &:hover {
                    border:1px solid #0000CD;
                }
                &:focus{
                    border:1px solid #0000CD;
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
        }
    }

    .area{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        width:100%;
        padding:2px;
        height:100%;
        overflow:scroll;

        .area--line{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:99%;
            height:25px;
            padding:3px;
            border:1px solid #EEE;
            margin:3px;
            border-radius:5px;

            .area--dados{
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:flex-start;
                div{
                    width:300px;
                }

            }

            .area--button{
                display:flex;
                flex-direction:row;
                width:70px;
                justify-content:space-between;
                align-items:center;

                .area--video{
                    margin-right:10px;
                    cursor:pointer;

                    .button{
                        height:20px;
                        width:auto;

                    }
                    img{
                        width:25px;   
                    }
                }

                .area--Endereco{
                    margin-right:10px;
                    cursor:pointer;

                    .button{
                        height:20px;
                        width:auto;

                    }
                    img{
                        width:25px;   
                    }
                }
            }
        }
    }


@media (max-width:700px){

    .WindowArea{

        .WindowBody{
            width:80%;
            height:250px;
        }
    }

    .WindowAreaEndereco{

        .WindowBodyEndereco{
            width:80%;
            height:250px;
        }
    }
    .AreaPesquisa{
        flex-direction:column;
        width:100%;
        height:120px;
        form{
            flex-direction:column;
            width:95%;
            padding:10px;

            input{
                width:100%;
                margin:10px;
            }

            button{
                width:100%;
            }
        }
    }
    .area{

        .area--line{
            height:80px;
            width:auto;
            .area--dados{
                flex-direction:column;
            }
        }
    }   
}
`;
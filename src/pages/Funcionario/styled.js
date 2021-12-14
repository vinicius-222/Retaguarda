import styled from 'styled-components';


export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    background-color:#F9F9F9;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;

    form{
        width:100%;
        .linha{
            display:flex;
            flex-direction:row;
            margin-bottom:10px;
    
            .area{
                display:flex;
                flex-direction:column;
                margin-right:10px;
                width:25%;
                height:70px;
    
                .area--title{
                    text-decoration:none;
                    color:#0B3F64;
                    font-size:18px;
                }
    
                .area--input{
                    display:flex;
                    flex-direction:column;
                    input{
                        width:100%;
                        font-size:14px;
                        padding:5px;
                        border:1px solid #DDD;
                        border-radius:3px;
                        outline:0;
                        transition:all ease .4s;
    
                    }
    
                    textarea{
                        width:100%;
                        height:100px;
                        font-size:14px;
                        border-radius:5px;
                        border:0.5px solid #CCC;
                        outline:0;
                        resize:none;
                    }
    
                }
    
                .area--inputloja{
                    flex-direction:column;
                }
            }

            .areaLarge{
                display:flex;
                width:100%;
            }

            .areaSmall{
                display:flex;
                width:10%;
            }

        }
    
        input{
            width:100%;
            font-size:14px;
            padding:5px;
            border:1px solid #DDD;
            border-radius:3px;
            outline:0;
            transition:all ease .4s;
        }

    
        .AreaCorpo{
            color:#0B3F64;
            font-size:11pt;
            transition:all ease 0.5s;
        }
    }
    .AreaContador{
        padding:20px 0px;
        height:40px;

        label{
            color:#0B3F64;
            font-size:11pt;
        }
    }
`;
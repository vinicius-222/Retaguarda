import styled from 'styled-components';

export const Container = styled.div`
    width:95%;
    
    form{
        .linha{
            display:flex;
            flex-direction:row;
            margin-bottom:10px;

            .area--add{
                display:flex;
                widht:25px;
                margin:0px 10px;
                margin-left:-3px;
                justify-content:center;
                align-items:center;
                cursor:pointer;

                img{
                    width:25px;
                    height:25px;
                }
            }
            
            .area{
                display:flex;
                flex-direction:column;
                margin-right:10px;
                width:25%;

                .area--title{
                    text-decoration:none;
                    color:#0B3F64;
                    font-size:18px;
                }

                .area--input{
                    display:flex;
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

            .area--button{
                width:100%;
            }
        }
        h2{
            margin-top:30px;
            color:#555555;
        }
    }
`;
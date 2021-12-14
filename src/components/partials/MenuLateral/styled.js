import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    max-width:300px;
    height:100vh;
    margin:0px;
    aside{
        width:50px;
        height:100%;
        transition:all ease .2s;
        background-color:#1E1E1E;
        overflow: auto;

        .Menu-Opem{
            display:flex;
            height:90px;
            width:100%;
            padding:10px 0px;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            cursor:pointer;
            background-color:##1E1E1E;
            border-bottom:0.5px solid #CCC;
        }

        .AreaMenuClose{
            display:none;
            transition:all ease 1s;
        }

        .AreaMenu {
            height:100%;
            text-decoration:none;
            transition:all ease 1s;

            a{
                display:flex;
                justify-content:space-between;
                align-items:center;
                width:100%;
                height:100%;
                text-decoration:none;
            }
         
            .Menu{
                transition:all ease 1s;
                width:100%;
                flex-direction:column;
    
                .Areabutton{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:50px;
                    width:100%;
                    border-bottom: .1px solid #CCC;
                    cursor:pointer;
    
                    &:hover{
                        background-color:#3D3B39;
                    }
                }

                .SubMenu{
                    display:none;
                    opacity:0;
                    background-color:#282828;
                    transition:all ease .6s;
                    -webkit-transition:all ease .6s;
                    -moz-transition:all ease .6s;
                    -o-transition:all ease .6s;
                    -ms-transition:all ease .6s;
                    border-bottom:0.3px solid #CCC;

                }

                .ShowMenu{
                    display:flex;
                    flex-direction:column;
                    opacity:1;
                }

                .SubMenuN-1{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    align-items:center;
                    width:100%;
                    cursor:pointer;
                    height:50px;
                    &:hover{
                        background-color:#3C3C3B;
                    }
                }

                label{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-left:10px;
                    color:#B1B1B1;
                    cursor:pointer;
                    font-size:15px;
                }

                .label-1{
                    padding:0px 20px;
                }
            }
        }

    }
   
    .show{
        width:300px;
    }

    @media (max-width:600px){

        aside{
            width:0px;
        }

        .show{
            width:170px;
            transition:all ease .2s;
        }
    }
`;
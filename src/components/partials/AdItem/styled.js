import styled from 'styled-components';

export const Item = styled.div`
max-width:100%;
a{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    border:1px solid #CCC;
    box-shadow:1.5px 1.5px 5px 1px #FFF;
    text-decoration:none;
    border-radius:5px;
    color:#696969;
    background-color:#FFF;
    height:30px;
    padding:0px 2px;
    margin:2px 0px;
    transition:all ease .2s;
    width:98%;
    &:hover {
        background-color:#D3D3D3;
        border:1px solid #0000CD;
    }

    .AreaProduto{
        display:flex;
        width:100%;
        justify-content:space-between ;
        align-items:center;
        flex-direction:row;

        div {
            
        }
        
    }
    .AreaDetail{
        display:flex;
        height:30px;
        justify-content:space-between;
        align-items:center;
        width:200px;

        .BtnAdicionar{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-left:10px;
            width:100px;
            height:80%;
            border-radius:5px;
            color:#FFF;
            background-color:#06AA48;
            cursor:pointer;
            font-family:arial;
        }
    }
}




@media (max-width:600px){
    width:100px;
    a{
        height:auto;
        padding:0px;
        flex-direction:column;

        .AreaProduto{
            flex-direction:column;
            justify-content:center;
            padding-left:5px;
            align-items:flex-start;
            div{
                font-size:16px;
            }
        }
        
        .AreaDetail{
            justify-content:flex-end;
            margin-bottom:5px;
            width:100%;
            div{
                width:90px;
            }
            .BtnAdicionar{
                margin-right:30px;
                width:100px;
            }
        }
    }
}
`;
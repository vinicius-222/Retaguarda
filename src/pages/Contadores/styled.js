import styled from 'styled-components';

export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    background-color:#F9F9F9;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;

    .AreaTopo{
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        div{
            display:flex;
        }
    }

    .AreaFiltros{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:15px;
        background-color:#FFF;
        width:100%;
        height:120px;
        border-radius:5px;
        border:1px solid #CCC;
        padding:20px;

        .AreaFiltros-Campos{
            display:flex;
            flex-direction:column;
            width:90%;
            height:80px;
            justify-content:flex-start;
            align-items:flex-start;
            padding:0px 20px;

            p{
                color:#0B3F64;
            }
        }

        .AreaFiltros-Button{
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:flex-end;
            width:20%;
            height:80px;
            margin-left:10px;
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
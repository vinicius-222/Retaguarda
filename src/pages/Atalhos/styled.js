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
    }

    .AreaContador{
        padding:20px 0px;
        height:40px;

        label{
            color:#0B3F64;
            font-size:11pt;
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

    .AreaTabela{
        width:100%;
        height:500px;
        margin-top:20px;
        border:0px;

        table{
            width:100%;
            border:0px;
            border-collapse: collapse;
        }

        table thead tr th{
            background-color:#183A5C;
            color:#FFF;
            height:40px;

        }
        th, td{
            padding:5px 10px;
            text-align:left;
            font-size:14px;
            color:#737373;
        }

        tbody tr:hover{
            background-color:#EEE;
        }

        tbody tr:nth-child(even){
            background-color:#DDD;
        }
    }
`;
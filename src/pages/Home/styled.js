import styled from 'styled-components';


export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:#F9F9F9;
    box-sizing:border-box;

    .AreaTopo{
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .AreaFiltros{
        margin-top:15px;
        background-color:#FFF;
        width:100%;
        height:140px;
        border-radius:5px;
        border:1px solid #CCC;
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        padding:10px;

        .AreaCampos{
            display:flex;
            justify-content:flex-start;
            align-items:flex-start;
            flex-direction:column;
            width:100%;
            height:120px;
            margin-right:50px;

            b{
                font-size:18px;
                margin:10px 0px;
                color:#FFF;
            }

            .areaB{
                color:#000E2D;
            }

            .b-1{
                color:#999;
                font-size:15px;
            }
        }

        .AreaButton{
            display:flex;
            justify-content:flex-end;
            align-items:flex-start;
            flex-direction:column;
            width:20%;
            height:120px;
        }
    }

    .AreaCorpo{
        margin-top:20px;
        background-color:#FFF;
        width:100%;
        height:auto;
        border-radius:5px;
        border:1px solid #CCC;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        padding:10px;

        .AreaResult{
            display:flex;
            width:100%;
            height:100px;
        }

        .AreaDatas{
            display:flex;
            flex-direction:row;

            p{
                margin-right:50px;
                color:#555555;
            }
        }
    }
`;
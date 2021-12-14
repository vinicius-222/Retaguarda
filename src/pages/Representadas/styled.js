import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height:400px;
    padding:0px 10px;


    .AreaLoading{
        display:flex;
        height:70%;
        width:100%;
        background-color:#FFF;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }

    .AreaTitle{
        font-size:20px;
        margin-top:20px;
        color:#0000CD;
        font-family:arial;
    }

    .AreaList{
        border-radius:5px;
        display:flex;
        margin-top:10px;
        border:1px solid #EEE;
        height:40px;
        width:100%;
        padding:0px 5px;
        justify-content:space-between;
        align-items:center;
        
        .AreaList--button{
            display:flex;
            height:100%;
            height:70%;
        }
        .AreaList--btnRemove{
            display:flex;
            color:#FFF;
            justify-content:center;
            align-items:center;
            padding:0px 10px;
            border-radius:3px;
            background-color:#FFC1C1;
            height:100%;
            cursor:pointer;
        }
        .AreaList--btnActive{
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0px 10px;
            border-radius:3px;
            background-color:#48d05f;
            height:100%;
            color:#FFF;
            cursor:pointer;
        }
        div{
            color:#696969;
            margin:0px 10px;
        }
    }

    @media (max-width:600px){
        .AreaList{
            display:block;
            align-items:flex-start;
            flex-direction:column;
            height:auto;

            .AreaList--button{
                width:100%;
                height:25px;
                justify-content:flex-end;
                align-items:center;

            }
        }
    }
`;
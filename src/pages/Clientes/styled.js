import styled from 'styled-components';

export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    heght:auto;
    background-color:#F9F9F9;
    box-sizing:border-box;
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

    .AreaContador{
        padding:20px 0px;
        height:40px;

        label{
            color:#0B3F64;
            font-size:11pt;
        }
    }
    .AreaCorpo{
        color:#0B3F64;
        font-size:11pt;
        transition:all ease 0.5s;
    }
`;
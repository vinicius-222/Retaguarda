import styled from 'styled-components';

export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    background-color:#F9F9F9;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;

    a{
        text-decoration:none;
        color:#555555;
        font-size:18px;
    }

    .linha--end{
        display:flex;
        flex-direction:row;
        margin-bottom:10px;
        justify-content:flex-end;
        align-items:flex-end;
    }
`;
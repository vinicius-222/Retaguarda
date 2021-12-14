import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    displey:flex;
    justify-content:center;
    align-items:center;

    a{
        text-decoration:none;
        color:#555555;
        font-size:18px;
        margin-left:5px;
    }

    img{
        width:10px;
    }
`;

const LinkGoBack = (props) => {
    return(
        <Container>
            <img src={require('../assets/images/GoBack.png')} />
            <Link to={props.url}>Voltar</Link>
        </Container>
    )
}

export default LinkGoBack;
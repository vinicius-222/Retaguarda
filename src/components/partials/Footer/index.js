import React from 'react';
import { FooterArea } from './styled';
const Footer = () => {
    return (
        <FooterArea>
            <div className="container">
                <img src={require('../../../assets/images/LogoLandPage.png')}/><br/>
                Todos os direiros reservados
            </div>
        </FooterArea>
    );
}

export default Footer;
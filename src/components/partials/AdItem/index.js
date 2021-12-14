import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';
import { isLogged } from '../../../helpers/AuthHandler'
import { BASEAPIIMAGE } from '../../../helpers/SalatoAPI'


const BASE = BASEAPIIMAGE;
export default (props) => {
    const [stLoading, setStLoading] = useState(false);
    const [logged, setLogged] = useState(false);
    
    const AddClick = () => {
        props.onClick();
    }

    useEffect(() => {
        const LoadImg = async () =>{
            let img = new Image;
            img.src = `${BASE}${props.data.LinckImage}`;
            img.onload = () => {
                setStLoading(true);
            }
        }
        LoadImg();
        setLogged(isLogged);
    },[])
    
    return(
        <Item className="adItem">
            <Link>
                <div className="AreaProduto">
                    <div>{props.data.NmProduto}</div>
                    <div className="AreaDetail">
                        <div>R$ {parseFloat(props.data.VlPreco).toFixed(2)}</div>
                        <div className="BtnAdicionar" onClick={()=>AddClick()}>Adiconar</div>
                    </div>
                </div>
            </Link>
        </Item>
    );
}
import React, { useState, useEffect, forwardRef } from 'react';
import { AreaButton } from './styled';
import { connect } from 'react-redux';


const SetaBtn = (props) => {

    const handleClick = () => {
        if(props.onClick){
            props.onClick();
        }
    }

    return(
        <AreaButton onClick={()=>handleClick()}  height={props.height} width={props.width}>
            <div className={props.StTeste ? "run": "run run-1"}>
                <img src={props.src? require('../../../assets/images/Check.png'):require('../../../assets/images/SetaUp.png')}/>
            </div>
        </AreaButton>
    )
}

export default SetaBtn;
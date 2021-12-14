import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { ButtonPadrao, Warning } from './MainComponents';
import Button from '../components/ButtonPadrao';

const Container = styled.div`
width:100%;
height:auto;
margin-top:20px;
margin-bottom:20px;
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

    tbody tr{
        overflow:scroll;
    }

    tbody tr:hover{
        background-color:#EEE;
    }

    tbody tr:nth-child(even){
        background-color:#DDD;
    }

`;


const Table = (props) => {
    const [Registro, SetRegistro] =useState(props.registro ? props.registro:[]);

    const handleClickAcao = (i, k) =>{
        if(props.onClick){
            props.onClick(i, k);
        }
    }

    const handleClickStatus = (i) => {
        if(props.clickStatus){
            props.clickStatus(i);
        }
    }

    useEffect(()=>{
        SetRegistro(props.registro);
    },[props.registro])

    let Campos = [];
    for(let x = 0; x<props.head.length; x++){
        Campos.push(props.head[x][Object.keys(props.head[x])[0]])
    }
    return(
        <Container>
            <table id="TabelaPadrao">
                <thead>
                    <tr>    
                    {props.head &&
                        Campos.map((x,y)=>
                            <th key={y} style={{width:props.head[y][Object.keys(props.head[y])[1]] ? props.head[y][Object.keys(props.head[y])[1]]: 0}}>{x}</th>
                        )
                    }
                    </tr>
                </thead>
                <tbody>
                    {Registro &&
                        Registro.length > 0 ?
                            Registro.map((i, k)=>
                                <tr key={k}>
                                {Campos.map((x,y)=>
                                    x == "Status" ? <td key={y}><Button backgroundcolor={i.Status == "Ativo" ? "#009F2F":"#000E2D"} onClick={()=>handleClickStatus(i.id)} height={25} width={70} title={i.Status}/></td>:  <td key={y}>{`${i[x]}`}</td> && 
                                    x == "Ação" ? <td key={y}><ButtonPadrao onClick={()=>handleClickAcao(i,k)} height={25} width={70}>Editar</ButtonPadrao></td>:  <td key={y}>{`${i[x]}`}</td>
                                )}
                                </tr>
                        ):<></>}
                </tbody>
            </table>
            {Registro &&
                Registro.length == 0 ?
                <Warning><strong>Atenção: </strong> Nenhum registro encontrado</Warning>
            :<></>}
        </Container>
    )
}

export default Table;
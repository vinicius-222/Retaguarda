import React, {useState} from 'react';
import styled from 'styled-components';
import SetaBtn from '../components/partials/SetaBtn';

const Container = styled.div`
    display:flex;
    width:100%;
    background-color:#FFF;
    border:0.6px solid #CCC;
    border-radius:5px;
    min-height:50px;
    height:auto;
    transition:all ease 0.7s
    flex-direction:column;
    margin:10px 0px;

    .AreaTopo{
        display:flex;
        width:100%;
        padding:15px;
        justify-content:space-between;

        label{
            color:#0B3F64;
            font-size:15pt;
        }
    }

    .AreaCorpo{
        transition:all ease 0.7s;
        height:0px;
        padding:10px;

    }

    .AreaCorpo-Open{
        height:auto;
        transition:all ease 0.7s;
        padding:10px;
        display:flex;
        justify-content:center;
    }    

`;

const DropDown = (props) => {
    const [StOpen, setStOpen] = useState(props.open || false)
    return(
        <Container heightOpen={props.heightOpen}>
            <div className="AreaTopo">
                <label>{props.title}</label>
                <SetaBtn StTeste={StOpen} width={20} height={20} onClick={()=>setStOpen(!StOpen)} src="Azul"/>
            </div>
            <div className={!StOpen ? "AreaCorpo": "AreaCorpo-Open"}>
                {StOpen &&
                    props.source
                }
            </div>
        </Container>
    )
}

export default DropDown;
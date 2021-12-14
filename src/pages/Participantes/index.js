import React, {useState, useEffect, useRef} from 'react';
import {Container} from './styled';
import SalatoAPI, {BASEAPIVIDEO} from '../../helpers/SalatoAPI';
import Cookies from 'js-cookie';

const Participantes = (props) => {
    const API = SalatoAPI();
    const VideoControl = useRef();
    const [participantes, setParticipantes] = useState([]);
    const [participante, setParticipante] = useState([]);
    const [DsSearch, setDsSearch] = useState('');
    const [NmVideo, setNmVideo] = useState('');
    const [loading, setLoading] = useState(false);
    const [DsPlaceHolder, setDsPlaceHolder] = useState('Digite um cliente para pesquisa');
    const [modal, setModal] = useState(false);
    const [modalEnde, setModalEnde] = useState(false);

    const getParticipantes = async (e) => {
        setParticipantes([]);
        if (e){
            e.preventDefault();
        }
        const json = await API.getParticipantes(
            Cookies.get('token')
        )
        if (!json.error){
            setParticipantes(json.retorno);
        }
    }

    const handleAbreModal = (i) => {
        setModal(!modal);
        VideoControl.current.src=BASEAPIVIDEO+i.NmVideo;
        setNmVideo(BASEAPIVIDEO+i.NmVideo)
        setTimeout(()=>{
            if (!modal){
                document.querySelector('.WindowArea').style.backgroundColor = "rgba(0,0,0,.7)";
                document.querySelector('.WindowBody').style.opacity = 1;
            }
        },200)
    }

    const handleAbreModalEnde = (k) => {
        setParticipante(participantes[k]);
        setModalEnde(!modalEnde); 
        setTimeout(()=>{
            if (!modalEnde){
                document.querySelector('.WindowAreaEndereco').style.backgroundColor = "rgba(0,0,0,.7)";
                document.querySelector('.WindowBodyEndereco').style.opacity = 1;
            }
        },400)
    }

    const handleFechaModal = (i) => {
        setNmVideo('');
        VideoControl.current.src=BASEAPIVIDEO+i.NmVideo;
        if (modal){
            document.querySelector('.WindowArea').style.backgroundColor = "transparent";
            document.querySelector('.WindowBody').style.opacity = 0;
        }

        setTimeout(()=>{
            setModal(!modal);
            VideoControl.current.src="";
        },200)
    }

    const handleFechaModalEnde = (i) => {
        setParticipante([]);
        if (modalEnde){
            document.querySelector('.WindowAreaEndereco').style.backgroundColor = "transparent";
            document.querySelector('.WindowBodyEndereco').style.opacity = 0;
        }

        setTimeout(()=>{
            setModalEnde(!modalEnde);
        },400)
    }

    useEffect(()=>{
        getParticipantes();
    },[])

    return(
        <Container>
            <div  style={{display: modal ? "flex" : "none"}} className="WindowArea">
                <div className="WindowBody">
                    <div onClick={handleFechaModal} className="areaFechar">X</div>
                    <video width="100%" height="100%"   ref={VideoControl} controls autoplay>
                        <source type="video/mp4" />                
                    </video>
                </div>
            </div>
            <div  style={{display: modalEnde ? "flex" : "none"}} className="WindowAreaEndereco">
                <div className="WindowBodyEndereco">
                    <div onClick={handleFechaModalEnde} className="areaFechar">X</div>
                    <div className="area">
                        <div className="area--dados">
                            <div className="area--title">Nome:</div>
                            <div className="area--data">{participante.NmPessoa}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Telefone:</div>
                            <div className="area--data">{participante.DsFaxCobranca}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Data de Nascimento:</div>
                            <div className="area--data">{participante.DtNascimento}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Email:</div>
                            <div className="area--data">{participante.DsLogin}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Nome do Endereco:</div>
                            <div className="area--data">{participante.NmEndereco}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Logradouto:</div>
                            <div className="area--data">{participante.DsLogradouro}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Numero:</div>
                            <div className="area--data">{participante.NrNumero}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Bairro:</div>
                            <div className="area--data">{participante.DsBairro}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Cidade:</div>
                            <div className="area--data">{participante.DsCidade}</div>
                        </div>
                        <div className="area--dados">
                            <div className="area--title">Ideia de coxinha:</div>
                            <div className="area--data">{participante.DsIdeia}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="AreaPesquisa">
                <form onSubmit={getParticipantes}>
                    <input 
                        value={DsSearch}
                        onChange={e=>setDsSearch(e.target.value)}
                        type="text"
                        placeholder={DsPlaceHolder}
                    />
                    <button>Pesquisar</button>
                </form>
            </div>
            <div className="area">
            {participantes.map((i,k)=>(
                <div className="area--line">
                    <div className="area--dados">
                        <div>{i.NmPessoa}</div>
                        <div>{i.DsFaxCobranca}</div>
                        <div>{i.DsLogin}</div>
                    </div>
                    <div className="area--button">
                        <div className="area--Endereco" onClick={()=>handleAbreModalEnde(k)}>
                            <img className="button" src={require('../../assets/images/perfil.png')}/>
                        </div> 
                        <div className="area--video" onClick={()=>handleAbreModal(i)}>
                            <img src={require('../../assets/images/youtube-play-icone.png')}/>
                        </div>
                    </div>    
                </div>
            ))}
             </div>
        </Container>
    )
}

export default Participantes;
import styled from 'styled-components';

export const AreaButton = styled.div`
width:${props=>props.width || 15}px;
height:${props=>props.height || 15}px;
    margin-right:10px;

    img{
        width:${props=>props.width || 15}px;
        height:${props=>props.height || 15}px;
    }

    .run{
        transition: all 0.2s ease;
        width:15px;
        height:15px;
    }

    .run-1{
        transform:rotate(${props=>props.rot || 180}deg);
        width:${props=>props.width || 15}px;
        height:${props=>props.height || 15}px;
    }

    run-2{
        transition: all 0.2s ease;
        width:${props=>props.width || 15}px;
        height:${props=>props.height || 15}px;
    }

    .girar {
        animation: girar 0.4s infinite linear;
    }
    @keyframes girar {
        0% {
            transform: rotate(0deg)
        }

        100%{ 
            transform: rotate(180deg)  
        }
    }
`;
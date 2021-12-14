import styled from 'styled-components';
import banner from '../../assets/images/backgroundLogin.jpg';
export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;
export const SearchArea = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
height:100vh;
padding:200px;
background-image: url(${banner});

form {
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;
    margin-bottom:20px;
    height:300px;
    .areaLogo{
        display:flex;
        justify-content:center;
        align-items:center;
        height:70px;
        img{
            width:100px;
            height:auto;
        }
    }

    .area {
        display:flex;
        align-items:center;
        justify-content:center;
        padding:10px;
        max-width:700px;
        height:60px;

        .area--title {
            width:100px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }
        .area--input {
            height:30px;

            input {
                width:100%;
                font-size:14px;
                padding:5px;
                border:1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition:all ease .4s;
                height:30px;
                &:focus {
                    border:1px solid #333;
                    color:#333;
                }
            }
        }
        .area--button{
            width:100%;
            button {
                display:flex;
                width:120px;
                height:30px;
                justify-content:center;
                align-items:center;
                background-color:#0089FF;
                border:0;
                outline:0;
                border-radius:4px;
                color:#FFF;
                font-size:15px;
                cursor:pointer;

                &:hover {
                    background-color:#006FCE;
                }
            }
        }
    }
}

@media (max-width:600px){
   
    margin:20px;
    form{
        width:90%;
        .area{
            flex-direction:column;
            align-items:flex-start;
            
            .area--title {               
                text-align:left
            }
            .area--input{
                width:100%;
            }
            .area--button{
                width:100%;
                button {
                    width:100%;
                    margin:5px 0px ;
                } 
            }  
        } 
    }
}
`;
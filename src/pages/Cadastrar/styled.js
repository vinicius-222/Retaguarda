import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;
export const ImagemLogo = styled.div`
    margin-top:100px;
    height:100px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    
    .areaLogo{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100px;
        width:100px;
        background-color:#FFF;
        border-radius:5px;
        box-shadow:0px 0px 3px #999;
        
        img{
            height:70px;
            width:70px;
        }
    }
    @media (max-width:700px){
        margin-bottom:50px;
     }
`;

export const SearchArea = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:300px;
width:100%;

.areaLoad{
    position:absolute;
    right:50%;
    top:50%;
   
}
form {
    margin-top:100px;
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;
    margin-bottom:20px;

    .area {
        display:flex;
        align-items:center;
        padding:10px;
        max-width:700px;

        .area--title {
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }
        .area--input {
            flex:1;
            width:400px;
            input {
                width:100%;
                font-size:14px;
                padding:5px;
                border:1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition:all ease .4s;

                &:focus {
                    border:1px solid #333;
                    color:#333;
                }
            }
        }
        .area--button{
            button {
                display:flex;
                justify-content:center;
                align-items:center;
                width:110px;
                height:30px;
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
    padding:0px;
    form{
        width:90%;
        margin-bottom:20px;
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
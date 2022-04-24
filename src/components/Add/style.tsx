import styled from "styled-components";

export const ContainerAdd = styled.div`
    background-color: #ffffff;
    margin:40px auto;
    width: 1076px;
    padding: 30px;
    border-radius: 10px;

    @media (max-width:667px) {
        width: 94%;
        margin: 10px auto;
    }
    form{
        .input-add {
            display: flex;
            flex-direction: column;
            label {
                font-size: 15px;
                font-weight: 600;
                color: #747272;
                margin-bottom: 10px;
            }
            input{
                height: 40px;
                padding-left: 10px;
                border: 1px solid #dddddd;
                border-radius: 8px;
            }
        }
        button {
            background-color:#211f1f;
            color: #eee;
            border: 0;
            width: 100px;
            height: 40px;
            border-radius: 8px;
            margin-top: 20px;
            text-transform: uppercase;
        }
    }

`;

export const ErrorRequire = styled.span`
    color: red;
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px;
`;
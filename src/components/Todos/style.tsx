import styled from "styled-components";

export const ContainerWrapperTodo = styled.div`
    background-color: #ffffff;
    margin:40px auto;
    width: 1076px;
    padding: 30px;
    border-radius: 10px;
    outline: none;
    @media (max-width: 667px) {
        width: 100%;
    }
`;

export const ContainerNone = styled.div`

    width: 100%;
    height: 50px;
    background-color: #fbc3c3;
    border: 1px solid #f59e9e;
    display: flex;
    padding: 20px;
    align-items: center;
    span{
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
    }
`
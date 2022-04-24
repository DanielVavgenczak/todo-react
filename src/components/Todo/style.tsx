import styled from 'styled-components';

export const ContainerTodo = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;

    outline: none;
    .todo-done{
        display: flex;
        align-items: center;
        input[type="checkbox"]{
            color: #A5D4FF;
            outline: none !important;
        }
        span {
            font-size: 15px;
            color: #747272;
            margin-left: 15px;
        }
    }

    button {
        border:0;
        font-size: 15px;
        color: #EA0303;
        cursor: pointer;
    }
`;
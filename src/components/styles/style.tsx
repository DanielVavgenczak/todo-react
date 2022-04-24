import styled from "styled-components";

export const Container = styled.div`
    width: 1296px;
    margin: 0 72px;
    @media (max-width: 667px) {
       width: 95%;
       margin: 0 auto;
    }

`

export const Header = styled.header`
    width:100%;
    height: 70px;
    padding: 20px 72px;
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    img{
        width: 83.12px;
        height:14.45px;
    }

    @media (max-width: 667px) {
       padding: 20px 15px;
    }
`

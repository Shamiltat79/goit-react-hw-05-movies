import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
`
export const Poster = styled.div`
    padding: 16px;
`
export const Info = styled.div`
width: 600px;
    padding: 16px;
`
export const GoBackLink = styled(Link)`
    text-decoration: none;
    fill: green;
    &:hover{
        color: #b41b1b
    }
`
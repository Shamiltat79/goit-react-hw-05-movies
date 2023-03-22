import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;

`

export const MoviesList = styled.ul`
    list-style: none;
    text-decoration: none;
    padding: 20px;
`

export const MovieItem = styled.li`
    display: block;
    text-decoration: none;
    color: #2c2c2c;
    margin: 4px;
    &:hover{
        color: #b41b1b
    }
`

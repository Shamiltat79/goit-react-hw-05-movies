import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieItems = styled.li`
display: block;
text-decoration: none;
color: #2c2c2c;
margin: 4px;
&:hover{
   color: #b41b1b;
   
}
`
export const MovieLink = styled(Link) `
text-decoration: none;   
`
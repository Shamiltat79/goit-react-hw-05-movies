import styled from "styled-components";

export const CastList = styled.ul`
    display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const CastItem = styled.li`
    width: 220px;
  height: 380px;
 
    border-radius: 2px;
  
`
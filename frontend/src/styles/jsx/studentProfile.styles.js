import styled from "styled-components";

const StyledPage = styled.div`
    margin: 2rem;
    padding: 1rem;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.light.text};
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.light.secondary};
    box-shadow: 0px 0px 2px 4px #606060;
`

const StyledCards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

export {StyledPage , StyledCards};
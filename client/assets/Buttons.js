import  styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #496b89;
  color: #496b89;
  margin: 0 1em;
  padding: 0.5em 1em;
  
    ${props => props.active && `
        background : #496b89;
        color: aliceblue;
    `},
    ${props => props.card && `
        border: 2px solid #0B8659;
        color: black;
    `}
`;

export default Button;
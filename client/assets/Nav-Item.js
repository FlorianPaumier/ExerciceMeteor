import  styled from "styled-components";

const NavItem = styled.button`
  background-color: #ffa662;
  padding: 0;
 
  border-left: 0;
  border-right: 0;
  border-top: 2px  solid #496b89;
  border-bottom: 1px  solid #496b89;
  color: #496b89;
  width: 100%;
  height: 15vh;
  vertical-align:center;
  
    &:hover {
        background: #496b89;
        color: white;
    }
    
    &:last-child {
        border-bottom: 2px  solid #496b89;
    }
    ${props => props.active && `
        background : #496b89;
        color: aliceblue;
    `}
`;



export default NavItem;

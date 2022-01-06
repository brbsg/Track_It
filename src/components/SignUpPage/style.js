import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    
    padding: 31px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    height: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;

    color: #52B6FF;
`;

export {
    Container,
    StyledLink
}
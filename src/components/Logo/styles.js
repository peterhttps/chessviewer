import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    & img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
`;

export const LogoName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ColoredText = styled.p`
    color: ${props => props.color};
    font-size: 1.3rem;
    -webkit-user-select: none;         
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
`;
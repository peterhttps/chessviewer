import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;

export const LogoContainer = styled.div`
    padding: 1rem 2rem 2rem 2rem;
`;

export const Container = styled.div`
    display: flex;;
    justify-content: center;
    align-items: center;
`;


export const LoginBox = styled.div`
    color: white;
    display: flex;
`;

export const FormArea = styled.div`
    background: ${props => props.theme.gray};
    width: 569px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h1 {
        margin-bottom: 6rem;
        font-size: 2.5rem;
        color: black;
        white-space: nowrap;
        text-align: center;
    }

    & a {
        color: ${props => props.theme.black};
        text-decoration: none;
        margin-top: 2rem;
        font-size: .9rem;
    }

`;
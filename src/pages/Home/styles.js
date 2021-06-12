import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Body = styled.div`
    width: 80%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${props => props.theme.white};
    text-align: center;
    white-space: nowrap;
`;

export const ContentContainer = styled.div`
    display: flex;
    margin-top: 10rem;
`;

export const DescriptionButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    margin-left: 8rem;

    & p {
        color: ${props => props.theme.white};
        font-weight: 300;
        font-size: 1rem;
    }
`;

export const JoinButton = styled.button`
    color: ${props => props.theme.white};
    background: ${props => props.theme.brown};
    border: none;
    border-radius: 5px;
    padding: .8rem 3rem;
    font-size: 1.2rem;
    width: 40%;
    cursor: pointer;
`;

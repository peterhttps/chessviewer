import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    margin: 0 auto;
    padding-top: 2rem;
`;

export const IconArea = styled.div`
`;

export const TabButton = styled.button`
    margin: 1rem;
    background: none;
    border: none;
    cursor: pointer;
`;

export const HeaderButton = styled.button`
    background: ${props => props.theme.green};
    color: ${props => props.theme.white};
    padding: .6rem 3rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

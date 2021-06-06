import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.theme.green};
    color: ${props => props.theme.gray};
    border: none;
    padding: .8rem 5rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
`;
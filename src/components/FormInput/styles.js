import styled from 'styled-components';

export const Container = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    margin-bottom: 2rem;

    & i {
        display: flex;
        padding: 10px;
        color: black;
        min-width: 50px;
        text-align: center;
        background: ${props => props.theme.gray};
        border-radius: 5px 0 0 5px;
        height: ${props => props.height};
        justify-content: center;
        align-items: center;
    }

    & input {
        background: ${props => props.theme.gray};
        width: ${props => props.width};
        height: ${props => props.height};
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 0 5px 5px 0;
    }
`;

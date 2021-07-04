import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`;

export const BoardContainer = styled.div`
    width: 600px;
`;

export const MovesContainer = styled.div`
    background-color: ${props => props.theme.gray};
    width: 400px;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleContainer = styled.div`
    background-color: ${props => props.theme.darkBrown};
    padding: 1.5rem;
    text-align: center;
`;

export const TitlePiecesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleText = styled.h1`
    color: ${props => props.theme.gray};
    font-size: 1.4rem;
`;

export const DateText = styled.p`
    color: ${props => props.theme.gray};
    font-size: .8rem;
`;


export const MiddleContainer = styled.div`
    flex: 1;
`;

export const OpeningText = styled.p`
    color: ${props => props.theme.black}; 
    text-align: center;
    margin-top: 1.5rem;
    font-weight: bold;
`;

export const MovementBoard = styled.div`
    padding: 1rem;
    height: 300px;
    overflow: scroll;
    overflow-x: hidden;
`;

export const MovementLine = styled.div`
    display: flex;
    margin-bottom: .3rem;
`;

export const MovementNumber = styled.p`
    font-weight: bold;
`;

export const MovementCell = styled.p`
    margin-left: 2rem;
    padding: 2px 5px;
    border: 1px solid transparent;

    ${({ active }) => active && `
        background: #C2BEBE;
        border: 1px solid #6B6B6B;
        padding: 2px 5px;
        border-radius: 5px;
  `}

`;

export const ButtonsContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;

    & button {
        background: ${props => props.theme.beige};
        border: none;
        padding: 1rem 3rem;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        color: #414141;
    }

`;

export const FavoriteButton = styled.button`
  background: none;
  border: 1px solid #FFB800;
  color: ${props => props.theme.white};
  border-radius: 20px;
  padding: .3rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background: #FFB800;
    color: ${props => props.theme.background};
  }
`;
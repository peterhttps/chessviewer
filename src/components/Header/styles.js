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
    padding: .5rem;
    border-radius: 10px;

    background: ${props => props.selected ? '#000000' : ''};

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

export const UserArea = styled.div`
    color: white;

    & p {
        margin-bottom: 5px;
    }

    & button {
        width: 100%;
        padding: .3rem 0;
        background: ${props => props.theme.green};
        border: none;
        color: white;
        cursor: pointer;
    }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: space-around;
  height: 95%;
  margin: auto;
`; 
export const CloseButton = styled.button`
  position: relative;
  float: right;
  width: 20px;
  color: white;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
`; 
export const ModalTitle = styled.h1`
  color: white;
`; 
export const ModalTextArea = styled.textarea`
  height: 300px;
  width: 400px;

  background: #000000;
  border: none;
  resize: none;
  padding: 1rem;
  color: white;
`; 
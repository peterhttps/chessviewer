import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0;
  height: calc(100% - 97px);
  width: 100%;

  #background-img {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(30%, 50%);
  }
`;

export const SearchBar = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;

  input {
    width: 100%;
    background-color: #414141;
    color: #bbbbbb;
    padding: 18px 22px;
    border: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 500;
  }

  button {
    background-color: #496b00;
    color: #fff;
    border: none;
    padding: 15px 20px;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

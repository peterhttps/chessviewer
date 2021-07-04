import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 65px 0 0;
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
  box-sizing: border-box;
  width: 80%;
  max-width: 1200px;
  display: flex;
  margin-bottom: 2rem;
  z-index: 2;

  div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff200;
    background-color: #414141;
    padding: 0 20px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #454545;
      color: #a8a000;
    }
  }

  input {
    box-sizing: border-box;
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
    box-sizing: border-box;
    background-color: #496b00;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 15px 20px;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #6da100;
      color: #e0e0e0;
    }
  }
`;

export const SearchResults = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  width: 80%;
  max-width: 1200px;
  max-height: 590px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SearchResultDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #2d2d2d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2.75rem;
  font-family: "Roboto";

  h1 {
    font-weight: 700;
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }

  p ~ p {
    margin-top: 0.2rem;
  }

  #opening-and-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-top: 0.5rem;
    color: #f3f3f3;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #8368ed;
    }
  }

  & ~ & {
    margin-top: 1rem;
  }
`;

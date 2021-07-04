import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import {
  Wrapper,
  MainContent,
  SearchBar,
  SearchResults,
  SearchResultDiv,
} from "./styles";

import { BsSearch } from "react-icons/bs";
import { MdPageview } from "react-icons/md";

import lowOpacityChessboard from "../../assets/images/lowOpacityChessboard.png";
import api from "../../services/api";

const SearchPage = () => {
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    const params = {
      searchParam: inputRef.current?.value,
    };

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': token
    }

    const response = await api.post("partidas/procurar", params, {
      headers: headers
    });
    if (response.data !== "Nenhuma partida encontrada") {
      setSearchResults(response.data);
      console.log(response.data);
    }
  };

  return (
    <Wrapper>
      <Header window="Search" />
      <MainContent>
        <SearchBar>
          <input placeholder="Search for games here" ref={inputRef} />
          <button onClick={handleSearch}>
            <BsSearch size={20} />
          </button>
        </SearchBar>

        <SearchResults>
          {searchResults.length ? (
            searchResults.map((result) => (
              <SearchResultDiv>
                <div id="general-info">
                  <h2 id="players">{`${result.Jogador_Brancas} vs ${result.Jogador_Pretas}`}</h2>
                  <p id="place">{result.Website}</p>
                  <p id="moves">{result.Quantidade_Movimentos}</p>
                  <p id="date">{result.DataEvento.split("T")[0]}</p>
                </div>
                <div id="opening-and-result">
                  <p id="Opening">{result.Nome_Abertura}</p>
                  <h1 id="score">{result.Resultado}</h1>
                </div>
                <MdPageview
                  size={50}
                  onClick={() => {
                    history.push("/game/" + result.Id);
                  }}
                />
              </SearchResultDiv>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                letterSpacing: "3px",
              }}
            >
              <i>
                <p style={{ color: "#fff" }}>No results ...</p>
              </i>
            </div>
          )}
        </SearchResults>

        <img
          src={lowOpacityChessboard}
          id="background-img"
          alt="low opacity chessboard background"
        />
      </MainContent>
    </Wrapper>
  );
};

export default SearchPage;

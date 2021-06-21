import React, { useRef, useState } from "react";

import Header from "../../components/Header";
import { Wrapper, MainContent, SearchBar, SearchResults, SearchResultDiv } from "./styles";

import { BsSearch } from "react-icons/bs";
import { MdPageview } from "react-icons/md";

import lowOpacityChessboard from "../../assets/images/lowOpacityChessboard.png";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([
    {
      title: "A vs B",
      place: "Malásia",
      numberOfMoves: 32,
      date: "21/02/1998",
      opening: "Scicilian",
      score: "1-0"
    },
    {
      title: "A vs B",
      place: "Malásia",
      numberOfMoves: 32,
      date: "21/02/1998",
      opening: "Scicilian",
      score: "1-0"
    }
  ]);
  const inputRef = useRef(null);

  const handleSearch = () => {
    console.info(inputRef.current?.value);
  }

  return (
    <Wrapper>
      <Header />
      <MainContent>
        <SearchBar>
          <input placeholder="Search for games here" ref={inputRef}/>
          <button onClick={handleSearch}>
            <BsSearch size={20} />
          </button>
        </SearchBar>

        <SearchResults>
          {
            searchResults.map(result => (
              <SearchResultDiv>
                <div id="general-info">
                  <h2 id="players">{result.title}</h2>
                  <p id="place">{result.place}</p>
                  <p id="moves">{result.numberOfMoves}</p>
                  <p id="date">{result.date}</p>
                </div>
                <div id="opening-and-result">
                  <p id="Opening">{result.opening}</p>
                  <h1 id="score">{result.score}</h1>
                </div>
                <MdPageview size={50} />
              </SearchResultDiv>
              )
            )
          }
          
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

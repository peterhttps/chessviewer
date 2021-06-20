import React from "react";

import Header from "../../components/Header";
import { Wrapper, MainContent, SearchBar } from "./styles";

import { BsSearch } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";

import lowOpacityChessboard from "../../assets/images/lowOpacityChessboard.png";

const SearchPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        <SearchBar>
          <input placeholder="Search for games here" />
          <div id="Param-toggle"></div>
          <button>
            <BsSearch size={20} />
          </button>
        </SearchBar>

        <div id="Results-Container">
          <div id="result">
            <div id="general-info">
              <h2 id="players">Content</h2>
              <p id="place"></p>
              <p id="moves"></p>
              <p id="date"></p>
            </div>
            <div id="opening-and-result">
              <p id="Opening"></p>
              <h1 id="score">Content</h1>
            </div>
            <button id="visualize">
              <GrOverview />
            </button>
          </div>
        </div>

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

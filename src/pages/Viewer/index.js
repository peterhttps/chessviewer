import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Chessboard from "react-simple-chessboard";
import useChess from "react-chess.js";

import { Container, Body, BoardContainer } from './styles';
import Header from '../../components/Header';
import './styles.css'
import { getMatchById } from '../../services/game';

const moves = ["e4", "e5", "Nf3", "Nc6"];

function Viewer() {
  const history = useHistory();

  const { move, fen, reset, undo } = useChess();
  const [actualMove, setActualMove] = useState(0);

  useEffect(() => {
    const { data } = getMatchById(1);

    console.log(data);

  }, []);

  return (
    <Container>
        <Header />
        <Body>
          <BoardContainer>
            <Chessboard position={fen} />
          </BoardContainer>

          <button
            onClick={() => {
              move(moves[actualMove]);
              setActualMove((actualMove) => (actualMove += 1));
            }}
          >
            Move
          </button>
          <button
            onClick={() => {
              setActualMove((actualMove) => (actualMove -= 1));
              undo();
            }}
          >
            Undo
          </button>
          <button
            onClick={() => {
              setActualMove(0);
              reset();
            }}
          >
            Reset
          </button>
        </Body>
    </Container>
  );
}

export default Viewer;
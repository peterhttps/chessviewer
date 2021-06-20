import React, { useEffect, useState } from 'react';
import Chessboard from "react-simple-chessboard";
import useChess from "react-chess.js";
import { useHistory } from "react-router-dom";

import { 
  Container, 
  Body, 
  BoardContainer,
  MovesContainer,
  TitleContainer,
  TitlePiecesContainer,
  TitleText,
  DateText,
  MiddleContainer,
  OpeningText,
  MovementBoard,
  MovementNumber,
  MovementLine,
  MovementCell,
  ButtonsContainer
} from './styles';
import Header from '../../components/Header';

import { getMatchById } from '../../services/game';

import blackPiece from '../../assets/images/black.png';
import whitePiece from '../../assets/images/white.png';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

function Viewer() {
  const history = useHistory();


  const [moves, setMoves] = useState(["e4", "e5", "Nf3", "Nc6"]);
  const [whitePlayer, setWhitePlayer] = useState("loading");
  const [blackPlayer, setBlackPlayer] = useState("loading");
  const [abertura, setAbertura] = useState("loading");
  const [dateEvent, setDateEvent] = useState("loading");

  const movementMatrix = useRef([]);
  let { id } = useParams();

  const { move, fen, undo } = useChess();
  const [actualMove, setActualMove] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const getMatch = useCallback(async () => {
    const { data } = await getMatchById(id);

    if (data.Movimentos === undefined) {
      history.push("/");
    }

    setMoves(data.Movimentos);
    setWhitePlayer(data.Jogador_Brancas);
    setBlackPlayer(data.Jogador_Pretas);
    setBlackPlayer(data.Jogador_Pretas);
    setAbertura(data.Nome_Abertura);
    const yearDate = new Date(data.DataEvento);
    setDateEvent(yearDate.toLocaleDateString());
 
    let count = 1;

    data.Movimentos.forEach((element, index) => {
      movementMatrix.current.push(count);
      if (index % 2 === 0) count += 1;
    });

    setLoading(false);
  }, [history, id]);

  useEffect(() => {
    getMatch();

  }, [getMatch]);


  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        if (actualMove < moves.length - 1) {
          setActualMove((actualMove) => (actualMove += 1));
          move(moves[actualMove + 1]);
        }
      }, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [actualMove, isPlaying, move, moves]);

  return (
    <Container>
        <Header />
        <Body>
          <BoardContainer>
            <Chessboard position={fen} />
          </BoardContainer>

          {!loading && <MovesContainer>
            <TitleContainer>
              <TitlePiecesContainer>
                <img src={blackPiece} alt="blackPiece" />
                <TitleText>{blackPlayer} vs {whitePlayer}</TitleText>
                <img src={whitePiece} alt="whitePiece" />
              </TitlePiecesContainer>

              <DateText>{dateEvent}</DateText>
            </TitleContainer>
            
            <MiddleContainer>
              <OpeningText>
                {abertura}
              </OpeningText>
              <MovementBoard>

                {moves.map((move, index) => {
                  if (index === 0) {
                    return (
                      <MovementLine key={index}>
                        <MovementNumber>
                          1.
                        </MovementNumber>
                        <MovementCell active={actualMove === index}>
                          {moves[index]}
                        </MovementCell>
                        <MovementCell active={actualMove === index + 1}>
                          {moves[index + 1]}
                        </MovementCell>
                      </MovementLine>
                    )
                  }

                  if (index > 1 && index % 2 === 0) {
                    return (
                      <MovementLine key={index}>
                        <MovementNumber>
                          {movementMatrix.current[index]}
                        </MovementNumber>
                        <MovementCell active={actualMove === index}>
                          {moves[index]}
                        </MovementCell>
                        <MovementCell active={actualMove === index + 1}>
                          {moves[index + 1]}
                        </MovementCell>
                    </MovementLine>
                    )
                  }

                  return (
                    <div key={index}></div>
                  )
                })}

              </MovementBoard>
            </MiddleContainer>
            <ButtonsContainer>   
              <button
                onClick={() => {
                  if (actualMove !== 0) {
                    setActualMove((actualMove) => (actualMove -= 1));
                    undo();
                  }
                }}
              >
                {"<"}
              </button>
              <button
                onClick={() => {
                  if (isPlaying) {
                    setIsPlaying(false);
                  } else {
                    setIsPlaying(true);
                  }

                }}
              >
                {isPlaying ? "palze" : "plei"}
              </button>
              <button
                onClick={() => {
                  if (actualMove < moves.length - 1) {
                    setActualMove((actualMove) => (actualMove += 1));
                    move(moves[actualMove + 1]);
                  }
                }}
              >
                {">"}
              </button>
            </ButtonsContainer>
          </MovesContainer>}

        </Body>
    </Container>
  );
}

export default Viewer;
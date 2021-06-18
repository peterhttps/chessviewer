import React, { useEffect, useState } from 'react';
import Chessboard from "react-simple-chessboard";
import useChess from "react-chess.js";

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
  const [moves, setMoves] = useState(["e4", "e5", "Nf3", "Nc6"]);
  const movementMatrix = useRef([]);
  let { id } = useParams();

  const { move, fen, undo } = useChess();
  const [actualMove, setActualMove] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const getMatch = useCallback(async () => {
    const { data } = await getMatchById(id);

    setMoves(data);

    let count = 1;

    data.forEach((element, index) => {
      movementMatrix.current.push(count);
      if (index % 2 === 0) count += 1;
    });

    setLoading(false);
  }, [id]);

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
                <TitleText>Hitler vs Gandhi</TitleText>
                <img src={whitePiece} alt="whitePiece" />
              </TitlePiecesContainer>

              <DateText>20/10/2000</DateText>
            </TitleContainer>
            
            <MiddleContainer>
              <OpeningText>
                Abertura Italiana
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
                    <div></div>
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
                {"plei"}
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
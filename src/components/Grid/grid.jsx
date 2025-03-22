import { useState } from "react";
import Card from "../card/card";
import "./grid.css";
import isWinner from '../helpers/checkWinners';
import BackgroundVideo from "../../Opening/Background";

function Grid({ numberOfCards, onQuit }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => O, false => X
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] !== "" || winner) return; // Prevent moves after win

    const newBoard = [...board]; 
    newBoard[index] = turn ? "O" : "X";
    const win = isWinner(newBoard, turn ? "O" : "X");

    if (win) {
      setWinner(win);
    } else if (newBoard.every(cell => cell !== "")) {
      setWinner("Draw"); // If all cells are filled and no winner
    }

    setBoard(newBoard);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div className="grid-wrapper">
      <BackgroundVideo videoSrc="Background2.mp4" />
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={Boolean(winner)}
            key={idx}
            onPlay={play}
            player={el}
            index={idx}
          />
        ))}
      </div>
      {winner && (
        <>
          <h1 className="turn-highlight">
            {winner === "Draw" ? "It's a Draw!" : `Winner is ${winner}`}
          </h1>
          <button className="reset" onClick={reset}>Reset Game</button>
          <button className="quit" onClick={onQuit}>QUIT</button>
        </>
      )}
      
      {!winner && (
        <h1 className="turn-highlight current">Current turn: {turn ? "O" : "X"}</h1>
      )}
    </div>
  );
}

export default Grid;


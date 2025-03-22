import React, { useState } from "react";
import BackgroundVideo from "./Background";
import "./Opening1.css";
import Grid from "../components/Grid/grid";

function Opening1() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="Opener">
      {!showGrid ? (
        <div className="opening1" id="opening1">
          <BackgroundVideo videoSrc={"Background2.mp4"} />
          <h1>Tic Tac Toe</h1>
          <h3>A classic two-player strategy game. Get three in a row to win!</h3>
          <button onClick={() => setShowGrid(true)}>START GAME</button>

          <div>Game Rules</div>
          <p>
            The game is played on a 3x3 grid. <br />
            Players take turns marking a cell (X or O). <br />
            The first player to get three in a row (horizontally, vertically, or
            diagonally) wins. <br />
            If all 9 cells are filled and no player has won, the game is a draw.
          </p>
        </div>
      ) : (
        <Grid numberOfCards={9} onQuit={() => setShowGrid(false)} />
      )}
    </div>
  );
}

export default Opening1;

import { useEffect, useState } from "react";
import "./Opening.css";
import BackgroundVideo from "./Background";
import Opening1 from "./Opening1"

function TicTacToeLoading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 500);

    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 4900);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="Opening">
      {showLoading ? (
        <div className="Opening1">
            <BackgroundVideo videoSrc="BAckground4.mp4"/>
            <h1 className="Opening11">Welcome to the tic-tac-toe world !</h1>
            <div className="Opening12">
              <div className="progress-bar"></div>
            </div>
            <p className="Opening13">Entering...</p>
        </div>
      ) : (
          <Opening1></Opening1>
      )}
    </div>
  );
}

export default TicTacToeLoading;

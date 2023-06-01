import { Fragment, useState } from "react";

function CricketComponent() {
  const [score, setScore] = useState({
    runs: 0,
    wickets: 0,
    extras: 0,
    wides: 0,
    fours: 0,
    sixes: 0,
    noballs: 0,
    balls: 0,
  });

  const { runs, wickets, extras, wides, fours, sixes, noballs } = score;
  const balls = Math.floor(score.balls % 6);
  const overs = Math.floor(score.balls / 6);

  return (
    <Fragment>
      <div className="container">
        <div className="displayRuns">
          <h1>
            🏏 &nbsp;
            {runs} - {wickets} &nbsp;
          </h1>
        </div>
        <div className="displayBalls">
          ({overs}.{balls})
        </div>
        <div className="displayHits">
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 1,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 2,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 3,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 4,
                  fours: score.fours + 1,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 5,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 6,
                  sixes: score.sixes + 1,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 1,
                  extras: score.extras + 1,
                  wides: score.wides + 1,
                };
              });
            }}
          >
            Wd
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  runs: score.runs + 1,
                  extras: score.extras + 1,
                  noballs: score.noballs + 1,
                };
              });
            }}
          >
            N
          </button>
          <button
            onClick={() => {
              setScore((score) => {
                return {
                  ...score,
                  wickets: score.wickets + 1,
                  balls: score.balls + 1,
                };
              });
            }}
          >
            W
          </button>
        </div>
        <div className="displayExtras">
          (Extras - {extras}, wd - {wides}, nb - {noballs})
        </div>
      </div>
    </Fragment>
  );
}

export default CricketComponent;

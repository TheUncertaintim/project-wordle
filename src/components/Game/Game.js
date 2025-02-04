import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessGrid from "../GuessGrid/GuessGrid";
import GameResult from "../GameResult/GameResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [input, setInput] = React.useState({ guess: "" });
  const [guesses, setGuesses] = React.useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(input);
    var newGuesses = [...guesses];
    newGuesses.push(input.guess);
    setGuesses(newGuesses);
    setInput({ guess: "" });
  }

  function handleInputChange(e) {
    setInput({ guess: e.target.value.toUpperCase() });
  }

  // check whether the game has ended
  let winningCount = null;
  let isGameOver = false;
  if (guesses.length > 0 && guesses[guesses.length - 1] === answer) {
    winningCount = guesses.length;
    isGameOver = true;
  } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    isGameOver = true;
  }

  return (
    <>
      <GuessGrid guesses={guesses} answer={answer} />

      <GuessInput
        guess={input.guess}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        disabled={guesses.length === NUM_OF_GUESSES_ALLOWED}
      />

      {isGameOver && <GameResult winningCount={winningCount} answer={answer} />}
    </>
  );
}

export default Game;

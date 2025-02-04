import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GetGuessCell(char, status) {
  return (
    <span key={crypto.randomUUID()} className={`cell ${status}`}>
      {char}
    </span>
  );
}

function GetGuessRow(guess, answer) {
  if (guess === undefined) {
    // return empty cells
    return range(0, 5).map((_) => GetGuessCell(null, null));
  } else {
    // return cells filled with letters that make up the word
    return checkGuess(guess, answer).map((result) =>
      GetGuessCell(result.letter, result.status)
    );
  }
}

function GuessGrid({ guesses, answer }) {
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => (
        <p key={crypto.randomUUID()} className="guess">
          {GetGuessRow(guesses[idx], answer)}
        </p>
      ))}
    </div>
  );
}

export default GuessGrid;

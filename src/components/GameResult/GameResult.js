import React from "react";

function GameResult({ winningCount, answer }) {
  if (winningCount) {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{winningCount} guesses</strong>.
        </p>
      </div>
    );
  }
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameResult;

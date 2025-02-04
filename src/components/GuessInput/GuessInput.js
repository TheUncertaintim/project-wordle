import React from "react";

function GuessInput({ guess, handleInputChange, handleFormSubmit, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleInputChange}
        pattern="[A-Z]{5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((square, i) => (
        <li key={i}>
          <ol>
            {square.map((playerSymbol, i2) => (
              <li key={i2}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

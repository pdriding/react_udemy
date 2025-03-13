export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((square, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {square.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function upDate(row, col) {
//   setGameBoard((previousBoard) => {
//     const updatedBoard = [
//       ...previousBoard.map((innerArray) => [...innerArray]),
//     ];
//     updatedBoard[row][col] = activePlayer;

//     return updatedBoard;
//   });
//   onSelectSquare();
// }

export default function Log({ turns }) {
  if (!turns) return;

  return (
    <>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} SELECTED {turn.square.row}, {turn.square.col}
          </li>
        ))}
      </ol>
      ;
    </>
  );
}

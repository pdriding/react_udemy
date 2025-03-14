export default function UserOutput({ test }) {
  console.log(test);
  return (
    <>
      <p>{test && test.initialValue}hi</p>
    </>
  );
}

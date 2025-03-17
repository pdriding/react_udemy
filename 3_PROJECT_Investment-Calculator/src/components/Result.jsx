import { useState } from "react";

export default function Result({ test }) {
  const [investedCapital, setInvestedCapital] = useState(
    test.initialValue + test.annualInvestment
  );
  console.log(test);

  let firstValue =
    test.initialValue +
    test.annualInvestment +
    test.initialValue * (test.expectedReturn / 100);

  let secondValue = test.initialValue * (test.expectedReturn / 100);

  let thirdValue = test.initialValue * (test.expectedReturn / 100);

  let fourthValue = test.initialValue + test.annualInvestment;

  function createTable() {
    let innerHTML = [];
    for (let i = 1; i <= test.duration; i++) {
      innerHTML.push(
        <tr>
          <td>{i}</td>
          <td>{firstValue}</td>
          <td>{secondValue}</td>
          <td>{thirdValue}</td>
          <td>{fourthValue}</td>
        </tr>
      );
      fourthValue += test.annualInvestment;
      secondValue = Math.trunc(firstValue * (test.expectedReturn / 100));
      thirdValue += secondValue;
      firstValue = thirdValue + fourthValue;
    }
    return innerHTML;
  }

  return (
    <>
      <p>{test && test.initialValue}hi</p>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{createTable()}</tbody>
      </table>
    </>
  );
}

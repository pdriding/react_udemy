import Header from "./components/Header";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import { useState } from "react";

function App() {
  let STATE = {
    initialValue: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  const [invest, setInvest] = useState(STATE);

  function test(target, amount) {
    setInvest((tenn) => ({ ...tenn, [target]: [amount] }));
    console.log(55, invest);
  }
  console.log(1);
  return (
    <>
      <Header />
      <UserInput
        hmm={test}
        STATE={() => setInvest}
        annualInvestment={STATE.annualInvestment}
        expectedReturn={STATE.expectedReturn}
        duration={STATE.duration}
      />

      <UserOutput test={invest} />
    </>
  );
}

export default App;

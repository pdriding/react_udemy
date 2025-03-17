import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
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
    setInvest((tenn) => ({ ...tenn, [target]: amount }));
  }

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

      <Result test={invest} />
    </>
  );
}

export default App;

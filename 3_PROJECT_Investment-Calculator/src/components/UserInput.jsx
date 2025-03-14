export default function UserInput({ hmm, STATE }) {
  function initiateChange(event, target) {
    const amount = Number(event.target.value);

    // STATE((test) => {
    //   test[target] = amount;
    //   return test;
    // });

    hmm(target, amount);
  }

  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            onInput={(event) => initiateChange(event, "initialValue")}
            type="number"
            id="inital"
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            onInput={(event) => initiateChange(event, "annualInvestment")}
            type="number"
            id="annual"
          />
        </div>
        <div>
          <label>EXPECTED RETURN</label>
          <input
            onInput={(event) => initiateChange(event, "expectedReturn")}
            type="number"
            id="expected"
          />
        </div>
        <div>
          <label>DURATION</label>
          <input
            onInput={(event) => initiateChange(event, "duration")}
            type="number"
            id="duration"
          />
        </div>
      </div>
    </>
  );
}

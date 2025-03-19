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
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              onInput={(event) => initiateChange(event, "initialValue")}
              type="number"
              id="inital"
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>

            <input
              onInput={(event) => initiateChange(event, "annualInvestment")}
              type="number"
              id="annual"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              onInput={(event) => initiateChange(event, "expectedReturn")}
              type="number"
              id="expected"
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              onInput={(event) => initiateChange(event, "duration")}
              type="number"
              id="duration"
            />
          </p>
        </div>
      </div>
    </>
  );
}

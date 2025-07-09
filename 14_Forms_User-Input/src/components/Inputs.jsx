export default function Inputs({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>Please enter a valid email</p>}
      </div>
    </div>
  );
}

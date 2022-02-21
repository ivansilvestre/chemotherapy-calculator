export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        value={props.value}
        type={props.type}
        name={props.name}
        min={props.min}
        onChange={props.onChange}
        className={`${props.aucRequired ? "auc-required" : ""}`}
      />
    </div>
  );
}

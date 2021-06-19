function Button(props) {
  return (
    <button className="btn" onClick={props.action}>
      <span className="btnText">{props.text}</span>
    </button>
  );
}

export default Button;

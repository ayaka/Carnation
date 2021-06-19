function Button(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      <span className="btnText">{props.text}</span>
    </button>
  );
}

export default Button;

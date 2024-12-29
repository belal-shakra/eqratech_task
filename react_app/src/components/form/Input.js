

const Input = ({type, classes, name, id = "", value = "", placeholder = "", event = null}) =>{
  
  return(
    <input
      type={type}
      className={classes}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={event}
    />
  );
}

export default Input;
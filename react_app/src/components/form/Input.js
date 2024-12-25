

const Input = ({type, classes, name, id = "", value = "", placeholder = ""}) =>{
  
  return(
    <input
      type={type}
      className={classes}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
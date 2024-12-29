

const Label = ({label, classes, forId= ""}) =>{
  
  return(<label htmlFor={forId} className={classes}>{label}</label>);
}

export default Label;
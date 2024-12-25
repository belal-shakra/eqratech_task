

const Label = ({label, classes, forId= ""}) =>{
  
  return(<label for={forId} className={classes}>{label}</label>);
}

export default Label;
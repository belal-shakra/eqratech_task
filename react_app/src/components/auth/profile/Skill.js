
const Skill = ({name})=>{

  return (
    <span className="badge text-bg-primary mx-1">
      <span className="pe-1">{name}</span>
      <i className="bi bi-x-circle" />
    </span>
  );
}

export default Skill;
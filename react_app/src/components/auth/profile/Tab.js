
const Tab = ({name, classes = ""})=>{

  return(
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${classes}`}
        id={`${name}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${name}-tab-pane`}
        type="button"
        role="tab"
        aria-controls={`#${name}-tab-pane`}
        aria-selected="true"
      >
        {name}
      </button>
  </li>
  );
}

export default Tab;
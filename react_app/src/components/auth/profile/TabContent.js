
const TabContent = ({name, classes = "", children})=>{

  return(
    <div
      className={`tab-pane fade ${classes}`}
      id={`${name}-tab-pane`}
      role="tabpanel"
      aria-labelledby={`#${name}-tab`}
      tabIndex={0}
    >
      <div className="row m-4">
        <div className="col-sm-12 col-lg-6">
          <form action="" method="post">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
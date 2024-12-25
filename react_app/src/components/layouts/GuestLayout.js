
const GuestLayout = ({children})=>{

  return(
    <div className="d-flex justify-content-center my-5">
      <div className="border border-1 border-dark rounded p-3 bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default GuestLayout;
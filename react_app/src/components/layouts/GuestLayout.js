import { Outlet } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from "../../contexts/ContextProvider";


const Layout = ({children})=>{


  const {user, token, setUser, setToken} = useStateContext();

  if (token){
    return <Navigate to="/" />
  }


  return(
    <div className="d-flex justify-content-center my-5">
      <div className="border border-1 border-dark rounded p-3 bg-white shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
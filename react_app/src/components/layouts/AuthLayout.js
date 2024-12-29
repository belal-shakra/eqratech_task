import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const AuthLayout = ({children})=>{

  const {user, token} = useStateContext();


  // Redirect if not authenticated
  if(!token){
    return <Navigate to="/login"/>
  }




  return(
    <>
      <Nav />

      <main className="container my-5">
        <Outlet />
      </main>

    </>
  );
}


export default AuthLayout;
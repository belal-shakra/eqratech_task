import Info from "./Info";
import UpdateInfo from "./UpdateInfo";
import { useStateContext } from "../../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";


const Profile = ()=>{
  const {user, token} = useStateContext();


  // Redirect if not authenticated
  // if(!token){
  //   return <Navigate to="/login"/>
  // }



  return(
  <>
    <Info />

    <UpdateInfo />
  </>
);
}

export default Profile;
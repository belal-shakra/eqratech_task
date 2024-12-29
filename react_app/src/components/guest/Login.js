import InputWrapper from "../form/InputWrapper";
import Input from "../form/Input";
import Label from "../form/Label";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { post } from "../../services/Api";
import { useStateContext } from "../../contexts/ContextProvider";


const Login = ({title})=>{

  const [loginForm, setLoginForm] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  const {user, token, setUser, setToken} = useStateContext();


  function handleSubmit(e){
    e.preventDefault();
    post('login', loginForm)
    .then((e)=>{
      console.log(e);
      setToken(e.data.data.token);
      setUser(e.data.data.user);
      console.log(e.data.data);
      // <Navigate to={"profile"} />
    })
    .catch((e)=>{
      console.log(e.response.data);
      setLoginErrors({
        emailError: e.response.data.message.email[0],
        passwordError: e.response.data.message.password[0],
      });
    });
  }


  return(
    <form action="" onSubmit={(e) => {handleSubmit(e)}}>
      <h1 className="text-center mb-5">{title}</h1>

      <InputWrapper>
        <Label label="Email" classes="form-label" />
        <input type="email" name="email" className="form-control border border-dark border-1"
        onChange={(e)=>{
          setLoginForm({...loginForm, email: e.target.value});
        }}
        />
        <span className="text-danger">{loginErrors.emailError}</span>
      </InputWrapper>

      <InputWrapper>
        <Label label="Password" classes="form-label" />
        <input type="password" name="password" className="form-control border border-dark border-1"
        onChange={(e)=>{
          setLoginForm({...loginForm, password: e.target.value});
        }}
        />
        <span className="text-danger">{loginErrors.passwordError}</span>
      </InputWrapper>

      <div className="text-center mb-2">
        <Link to={"/register"}>Create a new account?</Link>
      </div>

      <InputWrapper>
        <Input type="submit" name="" classes="btn btn-primary w-100" value="Login"/>
      </InputWrapper>
      

    </form>
  );
}


export default Login;
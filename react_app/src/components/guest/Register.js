import InputWrapper from "../form/InputWrapper";
import Label from "../form/Label";
import { post } from "../../services/Api";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";


const Register = ({ title }) => {
  const [form, setForm] = useState({});
  const [formError, setFormError] = useState({});
  const {user, token, setUser, setToken} = useStateContext();


  function submitHandle(e){
    e.preventDefault();


    post('register', {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      gender: document.querySelector('#male').value,
      password: document.querySelector('#password').value,
      password_confirmation: document.querySelector('#password_confirmation').value,
    })
    .then((e)=>{
      setToken(e.data.data.token);
      setUser(e.data.data.user);
    })
    .catch((e)=>{
      setFormError({
        nameError: e.response.data.message.name[0],
        emailError: e.response.data.message.email[0],
        genderError: e.response.data.message.gender[0],
        passwordError: e.response.data.message.password[0],
      
      });
    });
  }



  return (
    <form action="" onSubmit={(e)=>submitHandle(e)}>
      <h1 className="text-center mb-5">{title}</h1>

      <InputWrapper>
        <Label label="Full Name" className="form-label fw-bold" />
        <input
          type="text"
          name="full_name"
          className="form-control border border-dark border-1"
          id="name"
        />
        <span className="text-danger">{formError.nameError}</span>
      </InputWrapper>

      <InputWrapper>
        <Label label="Email" className="form-label fw-bold" />
        <input
          type="email"
          name="email"
          className="form-control border border-dark border-1"
          id="email"
        />
        <span className="text-danger">{formError.emailError}</span>
      </InputWrapper>

      <InputWrapper>
        <Label label="Gender" className="form-label d-block fw-bold" />

        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          className="border border-dark border-1 mx-1"
        />
        <Label label="Male" className="form-label ps-1 pe-2" forId="male" />

        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          className="border border-dark border-1 mx-1"
        />
        <Label label="Female" className="form-label ps-1 pe-2" forId="female" />

        <span className="text-danger d-block">{formError.genderError}</span>
      </InputWrapper>

      <InputWrapper>
        <Label label="Password" className="form-label fw-bold" />
        <input
          type="password"
          name="password"
          className="form-control border border-dark border-1"
          id="password"
        />
        <span className="text-danger">{formError.passwordError}</span>
      </InputWrapper>

      <InputWrapper>
        <Label label="Password Confirmation" className="form-label fw-bold" />
        <input
          type="password"
          name="password_confirmation"
          className="form-control border border-dark border-1"
          id="password_confirmation"
        />
      </InputWrapper>


      <div className="text-center mb-2">
        <Link to={"/login"}>Already have an account?</Link>
      </div>

      <InputWrapper>
        <input
          type="submit"
          name=""
          className="btn btn-primary w-100"
          value="Register"
        />
      </InputWrapper>
    </form>
  );
}

export default Register;

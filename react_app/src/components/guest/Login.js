import InputWrapper from "../form/InputWrapper";
import Input from "../form/Input";
import Label from "../form/Label";

const Login = ({title})=>{
  return(
    <form action="">
      <h1 className="text-center mb-5">{title}</h1>

      <InputWrapper>
        <Label label="Email" classes="form-label" />
        <Input type="email" name="email" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Label label="Password" classes="form-label" />
        <Input type="password" name="password" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Input type="submit" name="" classes="btn btn-primary w-100" value="Login"/>
      </InputWrapper>

    </form>
  );
}


export default Login;
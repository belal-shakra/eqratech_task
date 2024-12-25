import InputWrapper from "../form/InputWrapper";
import Input from "../form/Input";
import Label from "../form/Label";

const Register = ({title})=>{
  return(
    <form action="">
      <h1 className="text-center mb-5">{title}</h1>

      <InputWrapper>
        <Label label="Full Name" classes="form-label fw-bold" />
        <Input type="text" name="full_name" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Label label="Email" classes="form-label fw-bold" />
        <Input type="email" name="email" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Label label="Gender" classes="form-label d-block fw-bold" />

        <Input type="radio" name="gender" value="male" id="male" classes="border border-dark border-1"/>
        <Label label="Male" classes="form-label ps-1 pe-2" forId="male" />

        <Input type="radio" name="gender" value="female" id="female" classes="border border-dark border-1"/>
        <Label label="Female" classes="form-label ps-1 pe-2" forId="female" />
      </InputWrapper>

      <InputWrapper>
        <Label label="Password" classes="form-label fw-bold" />
        <Input type="password" name="password" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Label label="Password Confirmation" classes="form-label fw-bold" />
        <Input type="password" name="password_confirmation" classes="form-control border border-dark border-1"/>
      </InputWrapper>

      <InputWrapper>
        <Input type="submit" name="" classes="btn btn-primary w-100" value="Register"/>
      </InputWrapper>

    </form>
  );
}


export default Register;
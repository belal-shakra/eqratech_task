import Tab from "./Tab";
import TabContent from "./TabContent";
import InputWrapper from "../../form/InputWrapper";
import Input from "../../form/Input";
import Label from "../../form/Label";


const UpdateInfo = ()=>{

  return(
  <>
  <section>
    <div class="my-4">

      <h2 class="my-4">Update Your Info</h2>

      <ul
        className="nav nav-tabs border-bottom border-1 border-dark"
        id="myTab"
        role="tablist"
      >
        <Tab name="Profile" classes={"active"}/>
        <Tab name="Password" />
        <Tab name="Skills" />
      </ul>


      <div class="tab-content" id="myTabContent">
        <TabContent name="Profile" classes="show active">
          <InputWrapper>
            <Label label="Full Name" classes="form-label fw-bold" />
            <Input type="text" name="full_name" classes="form-control border border-dark border-1"/>
          </InputWrapper>

          <InputWrapper>
            <Label label="Email" classes="form-label fw-bold" />
            <Input type="email" name="email" classes="form-control border border-dark border-1"/>
          </InputWrapper>

          <InputWrapper>
            <Label label="Profile Image" classes="form-label fw-bold" />
            <Input type="file" name="image" classes="form-control border border-dark border-1"/>
          </InputWrapper>

          <InputWrapper>
            <Label label="Role" classes="form-label fw-bold" />
            <Input type="text" name="role" classes="form-control border border-dark border-1"/>
          </InputWrapper>


          <InputWrapper>
            <Input type="submit" name="" classes="btn btn-primary w-100" value="Update"/>
          </InputWrapper>
        </TabContent>

        <TabContent name="Password">

        <InputWrapper>
          <Label label="Old Password" classes="form-label fw-bold" />
          <Input type="password" name="old_password" classes="form-control border border-dark border-1"/>
        </InputWrapper>

        <InputWrapper>
          <Label label="New Password" classes="form-label fw-bold" />
          <Input type="password" name="password" classes="form-control border border-dark border-1"/>
        </InputWrapper>

        <InputWrapper>
          <Label label="New Password Confirmation" classes="form-label fw-bold" />
          <Input type="password" name="password_confirmation" classes="form-control border border-dark border-1"/>
        </InputWrapper>

          <InputWrapper>
            <Input type="submit" name="" classes="btn btn-primary w-100" value="Update"/>
          </InputWrapper>
        </TabContent>



        <TabContent name="Skills">

          <InputWrapper>
            <Input type="text" name="skill" classes="form-control border border-dark border-1 d-inline-block w-75 me-1" placeholder="Add Skill"/>
            <Input type="submit" name="" classes={"btn btn-primary"} value="Add"/>
          </InputWrapper>
        </TabContent>

      </div>

      </div>
    </section>
  </>
  );
}

export default UpdateInfo;
import Skill from "./Skill";
const Info = ()=>{

  return(
    <section>
      <div className="d-flex border border-1 border-dark rounded bg-white p-4">
        <div id="user-img" className="border border-1 border-dark rounded mx-3">
          <img src="https://via.placeholder.com/200/000" alt="" />
        </div>
        <div className="mx-3">
          <p>
            <b>Name :</b> Belal Shakra
          </p>
          <p>
            <b>Email :</b> Belal@Shakra.com
          </p>
          <p>
            <b>Gender :</b> Male
          </p>
          <p>
            <b>Role :</b> Full-stack Developer
          </p>
          <p>
            <b>Skills :</b>

            <Skill name="PHP" />
            <Skill name="MySQL" />
            <Skill name="Laravel" />
            <Skill name="HTML5" />
            <Skill name="CSS3" />
            <Skill name="JavaScript" />
            <Skill name="Bootstrap" />
          </p>
        </div>
      </div>
    </section>

  );
}

export default Info;
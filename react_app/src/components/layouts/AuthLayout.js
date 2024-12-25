import Nav from "../partials/Nav";

const AuthLayout = ({children})=>{
  return(
    <>
      <Nav />

      <main className="container my-5">
        {children}
      </main>

    </>
  );
}


export default AuthLayout;
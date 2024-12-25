import "./App.css";
import GuestLayout from "./components/layouts/GuestLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./components/guest/Login";
import Register from "./components/guest/Register";
import Profile from "./components/auth/profile/Profile";

function App() {
  return (
    <>
      {/* <GuestLayout>
        <Login title="Login" />
        <Register title="Register" />
      </GuestLayout> */}

      <AuthLayout>
        <Profile />
      </AuthLayout>
    </>
  );
}

export default App;

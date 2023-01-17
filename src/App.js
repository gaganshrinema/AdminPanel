import NavigationBar from "./component/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashBoard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <NavigationBar />
      <DashBoard />
      <Sidebar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Profile /> */}
    </>
  );
}

export default App;

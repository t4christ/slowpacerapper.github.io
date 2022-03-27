import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Components/MyRoutes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Login from './Components/Login'
import { LoginContext } from "./Components/LoginContext";

function App() {
  return (
    <LoginContext>
      <BrowserRouter>
        <Nav />
        <MyRoutes />
        <Login />
        <Footer />
      </BrowserRouter>
    </LoginContext>
  );
}

export default App;

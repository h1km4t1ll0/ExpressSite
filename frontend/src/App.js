import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/ButtonLogin.css"
import "./css/NavbarAccount.css"
import "./css/FormLogin.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./elements/Auth";
import Default from "./elements/Default";
import Error from "./elements/Error";
import Success from "./elements/Success";
import Account from "./elements/Account";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/error" element={<Error/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/account" element={<Account/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
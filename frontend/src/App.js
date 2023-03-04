import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./elements/Auth";
import Default from "./elements/Default";
import Error from "./elements/Error";
import Successes from "./elements/Successes";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/error" element={<Error/>} />
            <Route path="/successes" element={<Successes/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
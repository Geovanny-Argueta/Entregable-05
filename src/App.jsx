import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetails from "./Components/CharacterDetails";
import Pokemones from "./Components/Pokemones";
import UserInput from "./Components/UserInput";
import ProtectedRoutes from "./Components/ProtectesRoutes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/Pokemones" element={<Pokemones />} />
            <Route path="/Pokemones/:id" element={<CharacterDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

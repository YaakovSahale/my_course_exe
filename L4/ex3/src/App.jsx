import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NamePick from "./pages/NamePick";
import CityPick from "./pages/CityPick";
import DataDisplay from "./pages/DataDisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/namePick" element={<NamePick />} />
        <Route path="/cityPIck/:firstName" element={<CityPick />} />
        <Route path="/dataDisplay/:id" element={<DataDisplay />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Bienvenido a Candy Shop!</div>} />
      </Routes>
    </div>
  );
}

export default App;

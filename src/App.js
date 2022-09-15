import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "./components/testing";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/" element={<Testing />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

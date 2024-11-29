import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import SupportTicketForm from "../Support/Support";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator/>}></Route>
        <Route path="/Support" element={<SupportTicketForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

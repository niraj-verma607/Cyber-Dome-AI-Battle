import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ChatInterface from "./components/ChatInterface";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/battle-arena" element={<ChatInterface />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

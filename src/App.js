import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import './resources/font-jakartaSans/importFont.css'

import Main from "./components/main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}
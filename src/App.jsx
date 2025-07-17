import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <DarkModeToggle />
    </div>
  );
}

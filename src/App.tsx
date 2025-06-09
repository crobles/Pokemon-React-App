// src/App.tsx
import React from "react";
import BattleView from "./components/BattleView";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <BattleView />
    </div>
  );
};

export default App;

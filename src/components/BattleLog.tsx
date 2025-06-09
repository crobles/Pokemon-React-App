import React from "react";

interface BattleLogProps {
  log: string;
}

const BattleLog: React.FC<BattleLogProps> = ({ log }) => {
  if (!log) return null;

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      <h4>Battle Log</h4>
      <p>{log}</p>
    </div>
  );
};

export default BattleLog;

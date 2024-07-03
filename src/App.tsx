// src/App.tsx
import React from "react";
import "./styles/App.css";
import Card from "./Card";
import {
  FaRegHandshake,
  FaCode,
  FaCogs,
  FaRecycle,
  FaRocket,
} from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="title">Perks of Using Design Patterns in ReactJS</h1>
      <div className="card-grid">
        <Card
          icon={<FaRegHandshake />}
          title="Collaborative Development"
          description="It Provides Structure for Collaborative Development"
        />
        <Card
          icon={<FaCode />}
          title="Code Organization"
          description="It Enhances Code Organization"
        />
        <Card
          icon={<FaCogs />}
          title="Maintainability"
          description="It Promotes Maintainability"
        />
        <Card
          icon={<FaRecycle />}
          title="Reusability"
          description="It Encourages Reusability"
        />
        <Card
          icon={<FaRocket />}
          title="Performance Optimization"
          description="It Helps in Performance Optimization"
        />
      </div>
    </div>
  );
};

export default App;

// src/Card.tsx
import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./styles/Card.css";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <BootstrapCard className="text-center m-3 card-custom">
      <BootstrapCard.Body>
        <div className="mb-3 icon-wrapper">{icon}</div>
        <BootstrapCard.Title className="card-title">
          {title}
        </BootstrapCard.Title>
        <BootstrapCard.Text className="card-description">
          {description}
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;

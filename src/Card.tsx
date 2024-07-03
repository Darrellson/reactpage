import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./styles/Card.css";

interface CardProps<T> {
  icon: React.ReactNode;
  title: T;
  description: T;
}

const Card = <T extends React.ReactNode>({ icon, title, description }: CardProps<T>) => {
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

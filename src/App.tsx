// src/App.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Footer from './Footer';
import { FaRegHandshake, FaCode, FaCogs, FaRecycle, FaRocket } from 'react-icons/fa';
import './styles/Index.css';

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Container className="py-5">
        <h1 className="title">Perks of Using Design Patterns in ReactJS</h1>
        <Row className="justify-content-center card-grid">
          <Col xs="auto">
            <Card 
              icon={<FaRegHandshake />} 
              title="Collaborative Development" 
              description="It Provides Structure for Collaborative Development" 
            />
          </Col>
          <Col xs="auto">
            <Card 
              icon={<FaCode />} 
              title="Code Organization" 
              description="It Enhances Code Organization" 
            />
          </Col>
          <Col xs="auto">
            <Card 
              icon={<FaCogs />} 
              title="Maintainability" 
              description="It Promotes Maintainability" 
            />
          </Col>
          <Col xs="auto">
            <Card 
              icon={<FaRecycle />} 
              title="Reusability" 
              description="It Encourages Reusability" 
            />
          </Col>
          <Col xs="auto">
            <Card 
              icon={<FaRocket />} 
              title="Performance Optimization" 
              description="It Helps in Performance Optimization" 
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;


// npm install react-bootstrap bootstrap react-icons

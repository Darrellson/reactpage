// src/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
            <p>Contact us at contact@yourcompany.com</p>
            <p>Follow us on social media: Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

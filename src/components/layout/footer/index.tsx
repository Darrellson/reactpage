import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer/index.css';

const Footer = () => {
  return (
    <footer className="footer">
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

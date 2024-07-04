import { Container, Row, Col } from 'react-bootstrap';
import Card from './components/card/index';
import Footer from './components/footer/index';
import { FaRegHandshake, FaCode, FaCogs, FaRecycle, FaRocket } from 'react-icons/fa';
import './components/styles/Index.css';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
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
      </div>
      <Footer />
    </div>
  );
};

export default App;

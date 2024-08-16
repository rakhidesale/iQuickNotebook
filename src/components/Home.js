import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Notes from './Notes.js';

const Home = (props) => {
  const { showAlert } = props;

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-light" style={{ backgroundColor: '#2D2926', padding: '100px 0' }}>
        <Container>
          <h1 className="display-4">Welcome to iQuickNote</h1>
          <p className="lead">Your ultimate solution for managing personal notes with ease.</p>
          <Button variant="primary" href="/signup">Get Started</Button>
        </Container>
      </div>

      {/* Introduction Section */}
      <Container className="my-5">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title>Why iQuickNote?</Card.Title>
                <Card.Text>
                  iQuickNote offers a seamless experience to manage your notes, ideas, and tasks. With our intuitive interface, you can organize, categorize, and access your notes anytime, anywhere.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title>Features You'll Love</Card.Title>
                <Card.Text>
                  - Secure cloud storage<br/>
                  - User-friendly interface<br/>
                  - Organize notes by categories<br/>
                  - Set reminders for important notes<br/>
                  - Access your notes from any device
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Notes Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Your Notes</h2>
        <Notes showAlert={showAlert} />
      </Container>
    </div>
  );
};

export default Home;

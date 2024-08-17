import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

const Home = () => {
  const isAuthenticated = localStorage.getItem('token') !== null || sessionStorage.getItem('token') !== null;

  return (
    <div>
      <div className="hero-section text-center text-light" style={{ background: '#e8e8e8', padding: '100px 0', borderRadius: '4rem', boxShadow: 'hsl(261, 38%, 39%)' }}>
        <Container>
          <h1 className="display-4" style={{color: 'black', fontWeight: '500', fontFamily: 'Georgia, serif'}}>Welcome to iQuickNote</h1>
          <p className="lead mt-2" style={{color: 'black',fontFamily: 'Georgia, serif'}}>Your ultimate solution for managing personal notes with ease.</p>
          {!isAuthenticated && <button onClick={() => window.location.href = '/signup'}>Get Started</button>}
        </Container>
      </div>

      <Container className="my-5" style={{background: '#e8e8e8', padding: '2rem', borderRadius: '4rem', boxShadow: 'hsl(261, 38%, 39%)' }}>
        <Row>
          <Col md={6} className="mb-4">
            <Card style={{background: '#e8e8e8', boxShadow: 'hsl(261, 38%, 39%)'}}>
              <Card.Body>
                <Card.Title>Why iQuickNote?</Card.Title>
                <Card.Text>
                  iQuickNote offers a seamless experience to manage your notes, ideas, and tasks. With our intuitive interface, you can organize, categorize, and access your notes anytime, anywhere.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" >
            <Card style={{background: '#e8e8e8', boxShadow: 'hsl(261, 38%, 39%)'}}>
              <Card.Body>
                <Card.Title>Features You'll Love</Card.Title>
                <Card.Text variant="flush">
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
    </div>
  );
};

export default Home;

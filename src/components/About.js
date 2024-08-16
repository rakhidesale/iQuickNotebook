import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5 mb-4 " style={{background: 'white', padding: '2rem', borderRadius: '4rem', boxShadow: '6px  6px 30px rgba(0,0,0,1)' }}>
            <h2 className="my-5 mt-3 text-center">About iQuickNote</h2>
            <Row>
                <Col md={6}>
                    <Card className="mb-3" style={{background: 'white', boxShadow: '1px 1px 4px rgba(0,0,0,0.30)'}}>
                        <Card.Header as="h3">Our Mission</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                iQuickNote is designed to help you manage your personal notes with ease and efficiency.
                                Our goal is to provide a simple yet powerful tool that allows you to keep track of your thoughts,
                                ideas, and tasks all in one place.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-3" style={{background: 'white', boxShadow: '1px 1px 4px rgba(0,0,0,0.30)'}}>
                        <Card.Header as="h3">Features</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Secure cloud storage for your notes</ListGroup.Item>
                            <ListGroup.Item>User-friendly interface for easy note management</ListGroup.Item>
                            <ListGroup.Item>Ability to organize notes into categories</ListGroup.Item>
                            <ListGroup.Item>Option to set reminders for important notes</ListGroup.Item>
                            <ListGroup.Item>Access your notes from anywhere with an internet connection</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;

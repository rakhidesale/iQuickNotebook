import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-3">
            <h2 className="my-5 text-center">About iQuickNote</h2>
            <Row>
                <Col md={6}>
                    <Card className="mb-3 shadow-sm border-0">
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
                    <Card className="mb-3 shadow-sm border-0">
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
            <Row>
                <Col>
                    <Card className="mb-3 shadow-sm border-0">
                        <Card.Header as="h3">Our Team</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                iQuickNote is created by a dedicated team of developers and designers who are passionate about
                                making note-taking easier and more enjoyable. We constantly work to improve our platform and
                                add new features based on user feedback.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;

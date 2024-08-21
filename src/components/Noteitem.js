import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import { Card, Button } from 'react-bootstrap';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const formattedDate = new Date(note.date).toLocaleString();

    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <Card style={{ borderRadius: '1rem', boxShadow: '6px 6px 30px rgba(0,0,0,0.2)', background: '#f8f9fa', fontFamily:'cursive'}}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <Card.Title className="mb-0" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{note.title}</Card.Title>
                        <div>
                            <Button 
                                variant="link" 
                                onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success"); }}
                                className="text-danger"
                            >
                                <i className="far fa-trash-alt"></i>
                            </Button>
                            <Button 
                                variant="link" 
                                onClick={() => { updateNote(note); }}
                                className="text-primary mx-2"
                            >
                                <i className="far fa-edit"></i>
                            </Button>
                        </div>
                    </div>
                    <Card.Text>{note.description}</Card.Text>
                    <Card.Footer className="text-muted">
                        <small>{formattedDate}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Noteitem;

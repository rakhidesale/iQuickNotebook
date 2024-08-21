import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import loginImage from '../assets/images/add_notes.svg';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card p-4" style={{background: '#e8e8e8', padding: '2rem', borderRadius: '4rem', boxShadow: '6px  6px 30px rgba(0,0,0,1)', fontFamily: 'cursive'}}>
                        <div className="text-center mt-3 mb-3">
                            <img src={loginImage} alt="Add Note Illustration" style={{ width: '25%', height: 'auto' }} />
                        </div>
                        <h2 className="text-center mb-4" style={{color: '#4d0066'}}>Add a Note</h2>
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="title" 
                                    name="title" 
                                    value={note.title} 
                                    onChange={onChange} 
                                    minLength={5} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="description" 
                                    name="description" 
                                    value={note.description} 
                                    onChange={onChange} 
                                    minLength={5} 
                                    required 
                                    rows="4"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="tag" 
                                    name="tag" 
                                    value={note.tag} 
                                    onChange={onChange} 
                                    minLength={5} 
                                    required 
                                />
                            </div>
                            <button 
                                disabled={note.title.length < 5 || note.description.length < 5} 
                                type="submit" 
                                className="button w-100" 
                                onClick={handleClick}
                                style={{ padding: '17px 40px' }}
                            >
                                Add Note
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;

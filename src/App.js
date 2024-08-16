import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BackgroundVideo from './components/BackgroundVideo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null || sessionStorage.getItem('token') !== null;
    //return localStorage.getItem('token') !== null;
  }

  return (
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={isAuthenticated() ? <Home showAlert={showAlert}/> : <Navigate to="/login" />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert=
              {showAlert} />} />
              <Route path="/signup" element={<Signup showAlert=
              {showAlert} />} />
              <Route path="/backgroundvideo" element={<BackgroundVideo show={true} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
  );
}

export default App;

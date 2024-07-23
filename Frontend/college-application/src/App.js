import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import StudentDashboard from './Component/StudentDashboard/StudentDashboard';
import FacultyDashboard from './Component/FacultyDashboard/FacultyDashboard';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
// import StudentDashboard from './components/StudentDashboard';
// import FacultyDashboard from './components/FacultyDashboard';
// import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;

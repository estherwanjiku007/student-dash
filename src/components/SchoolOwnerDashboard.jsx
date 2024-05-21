

import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CreateSchool from './CreateSchool';
import AddStudent from './AddStudent';
import AddTeacher from './AddTeacher';

function SchoolOwnerDashboard() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetchSchools();
    }, []);

    const fetchSchools = async () => {
        try {
            const response = await axios.get('https://virtulearn-backend.onrender.com/schools');
            setSchools(response.data);
        } catch (error) {
            console.error('Error fetching schools:', error);
        }
    };

    const deleteSchool = async (schoolId) => {
        try {
            await axios.delete(`https://virtulearn-backend.onrender.com/schools/${schoolId}`);
            fetchSchools(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting school:', error);
            alert('Error deleting school');
        }
    };

    return (
        <div className="flex">
            <div className="w-1/4 p-4 bg-gray-800 text-white min-h-screen">
                <h2 className="text-2xl mb-4">Dashboard</h2>
                <ul>
                    <li className="mb-2"><Link to="/" className="hover:underline">Dashboard</Link></li>
                    <li className="mb-2"><Link to="/create-school" className="hover:underline">Create School</Link></li>
                    <li className="mb-2"><Link to="/add-student" className="hover:underline">Add Student</Link></li>
                    <li className="mb-2"><Link to="/add-teacher" className="hover:underline">Add Teacher</Link></li>
                    <li className="mb-2"><Link to="/logout" className="hover:underline">Log out</Link></li>
                </ul>
            </div>
            <div className="w-3/4 p-8">
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1 className="text-4xl font-bold mb-8">Welcome to your Manager Dashboard</h1>
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">Schools</h2>
                                {schools.length > 0 ? (
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {schools.map(school => (
                                            <div key={school.id} className="p-4 border rounded shadow">
                                                <h3 className="text-xl font-semibold">{school.name}</h3>
                                                <p className="mb-2">Address: {school.address}</p>
                                                <p className="mb-4">Contact: {school.contact}</p>
                                                <button 
                                                    onClick={() => deleteSchool(school.id)} 
                                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No schools available.</p>
                                )}
                            </div>
                        </>
                    } />
                    <Route path="/create-school" element={<CreateSchool />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/add-teacher" element={<AddTeacher />} />
                </Routes>
                <div className="text-center mt-8">
                    <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default SchoolOwnerDashboard;

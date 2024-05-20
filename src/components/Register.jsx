import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [userType, setUserType] = useState('');
    const [form, setForm] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const registerUser = async (e) => {
        e.preventDefault();

        const userdata = {
            'role': userType,
            'name': form.username,
            'email': form.email,
            'instructor_id': form.instructor_id,
            'password': form.password,
            'password_confirmation': form.password_confirmation
        };
        console.log("Submitting user data:", userdata);

        try {
            const response = await fetch('https://virtulearn-backend.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata),
            });

            if (response.ok) {
                console.log("Registration successful, navigating to login.");
                navigate('/Login');
            } else {
                const errorData = await response.json();
                console.log("Error data received:", errorData);
                setError(errorData.message || 'Registration failed');
            }
        } catch (err) {
            console.log("Error occurred:", err);
            setError('An error occurred. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));  
    };

    const studentsFormfield = (
        <div className="space-y-1">
            <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-1 text-sm font-medium">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="last_name" className="mb-1 text-sm font-medium">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 text-sm font-medium">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password_confirmation" className="mb-1 text-sm font-medium">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
        </div>
    );

    const instructorFormfield = (
        <div className="space-y-2">
            <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-1 text-sm font-medium">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="last_name" className="mb-1 text-sm font-medium">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="instructor_id" className="mb-1 text-sm font-medium">Instructor Id:</label>
                <input
                    type="text"
                    id="instructor_id"
                    name="instructor_id"
                    value={form.instructor_id || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 text-sm font-medium">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password_confirmation" className="mb-1 text-sm font-medium">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
        </div>
    );

    const ownerFormfield = (
        <div className="space-y-2">
            <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-1 text-sm font-medium">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="last_name" className="mb-1 text-sm font-medium">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="owner_id" className="mb-1 text-sm font-medium">Owner Id:</label>
                <input
                    type="text"
                    id="owner_id"
                    name="owner_id"
                    value={form.owner_id || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 text-sm font-medium">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password_confirmation" className="mb-1 text-sm font-medium">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
        </div>
    );

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-4 rounded shadow-md w-full max-w-sm">
          <form className="space-y-1" onSubmit={registerUser}>
            <div>
              <label htmlFor="userType" className="block text-lg font-medium mb-2">Register Here:</label>
              <select
                id="userType"
                value={userType}
                onChange={handleUserTypeChange}
                className="w-full p-1 border rounded"
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="owner">Owner</option>
              </select>
            </div>
            {userType === 'student' && studentsFormfield}
            {userType === 'instructor' && instructorFormfield}
            {userType === 'owner' && ownerFormfield}
            <button className="w-20 bg-blue-500 text-white py-1 rounded hover:bg-blue-600" type="submit">Register</button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </form>
        </div>
      </div>
    );
  };
  
export default Register;
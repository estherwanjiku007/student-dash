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
        <div className="space-y-4">
            <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
        </div>
    );

    const instructorFormfield = (
        <div className="space-y-4">
            <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="instructor_id" className="block text-sm font-medium text-gray-700">Instructor Id</label>
                <input
                    type="text"
                    id="instructor_id"
                    name="instructor_id"
                    value={form.instructor_id || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
        </div>
    );

    const ownerFormfield = (
        <div className="space-y-4">
            <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="owner_id" className="block text-sm font-medium text-gray-700">Owner Id</label>
                <input
                    type="text"
                    id="owner_id"
                    name="owner_id"
                    value={form.owner_id || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={form.password_confirmation || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <form className="bg-white p-6 rounded-md shadow-md space-y-4" onSubmit={registerUser}>
                <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={handleUserTypeChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
                <div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone' && !/^\d*$/.test(value)) {
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'phone') {
            if (!/^\d{10}$/.test(value)) {
                setErrors({
                    ...errors,
                    phone: 'Phone number must be exactly 10 digits',
                });
            } else {
                setErrors({
                    ...errors,
                    phone: '',
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors.phone) {
            alert('Please fix the errors in the form');
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/users', formData);
            alert('User data submitted successfully!');
            setFormData({
                name: '',
                phone: '',
                email: '',
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/yoga-background.jpg)' }}>
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">User Form</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Phone Number:</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-green-500 text-white p-3 rounded-md text-lg font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;

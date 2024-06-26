// src/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';
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
            await axios.post('http://localhost:5000/api/users', formData);
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;

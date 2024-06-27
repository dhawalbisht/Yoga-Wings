import React from 'react';
import '../index.css';

const Chat = () => {
    const phoneNumber = '917983227200'; // Replace with your phone number

    const openWhatsApp = () => {
        window.open(`whatsapp://send?phone=${phoneNumber}`);
    };

    return (
        <div className="chat-container">
            <button
                className="btn btn-orange btn-md"
                onClick={openWhatsApp}
            >
                Chat on WhatsApp
            </button>
        </div>
    );
}

export default Chat;

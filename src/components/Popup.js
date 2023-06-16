import React from 'react';
import './Popup.css';

function CallbackButton() {
  const handleCallback = () => {
    const phoneNumber = '+917017990795'; // Replace with your WhatsApp number
    const message = 'Connect to us.';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className='callback-button' onClick={handleCallback}>Request Callback</button>
  );
}

export default CallbackButton;





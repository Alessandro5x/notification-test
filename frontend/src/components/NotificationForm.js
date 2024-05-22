import React, { useState } from 'react';
import { sendNotification } from '../api';

const NotificationForm = () => {
  const [category, setCategory] = useState('Sports');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    try {
      await sendNotification(category, message);
      alert('Notification sent successfully');
      setMessage('');
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Failed to send notification');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Sports">Sports</option>
          <option value="Finance">Finance</option>
          <option value="Movies">Movies</option>
        </select>
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default NotificationForm;
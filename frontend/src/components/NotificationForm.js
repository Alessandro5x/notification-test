import React, { useState } from 'react';
import styled from 'styled-components';
import { sendNotification } from '../api';

const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 300px;
`;

const FormControl = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

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
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <Label>Category:</Label>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Sports">Sports</option>
          <option value="Finance">Finance</option>
          <option value="Movies">Movies</option>
        </Select>
      </FormControl>
      <FormControl>
        <Label>Message:</Label>
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      </FormControl>
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default NotificationForm;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLogs } from '../api';

const LogContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const LogList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LogItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const LogHistory = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getLogs();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <LogContainer>
      <Title>Log History</Title>
      <LogList>
        {logs.map((log) => (
          <LogItem key={log._id}>
            {new Date(log.createdAt).toLocaleString()} - {log.user.name} ({log.channel}): {log.message}
          </LogItem>
        ))}
      </LogList>
    </LogContainer>
  );
};

export default LogHistory;
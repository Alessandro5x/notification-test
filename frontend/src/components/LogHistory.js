import React, { useEffect, useState } from 'react';
import { getLogs } from '../api';

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
    <div>
      <h2>Log History</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            {new Date(log.createdAt).toLocaleString()} - {log.user.name} ({log.channel}): {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogHistory;
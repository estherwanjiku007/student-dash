import React, { useState } from 'react';
import axios from 'axios';

function ScheduleMeeting() {
  const [topic, setTopic] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/create-meeting', {
        topic,
        startTime,
        duration,
      });

      alert(`Meeting created successfully. Join URL: ${response.data.join_url}`);
    } catch (error) {
      console.error(error);
      alert('Error creating meeting');
    }
  };

  return (
    <div>
      <h1>Schedule a Zoom Meeting</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Topic:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Schedule Meeting</button>
      </form>
    </div>
  );
}

export default ScheduleMeeting;

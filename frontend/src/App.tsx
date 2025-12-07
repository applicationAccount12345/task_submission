import { useState } from 'react';
import './App.css';
import { createTask, type Task } from './api';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [dueDate, setDueDate] = useState('');
  const [createdTask, setCreatedTask] = useState<Task | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newTask: Task = {
        title,
        description,
        status,
        dueDate: dueDate ? new Date(dueDate).toISOString().slice(0, 19) : undefined
      };

      const savedTask = await createTask(newTask);
      setCreatedTask(savedTask);
      setMessage('Task created successfully!');

      setTitle('');
      setDescription('');
      setStatus('PENDING');
      setDueDate('');
    } catch (error) {
      console.error(error);
      setMessage('Error creating task.');
    }
  };

  return (
    <div className="container">
      <h1>Create New Task</h1>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit">Create Task</button>
      </form>

      {message && <div className="message">{message}</div>}

      {createdTask && (
        <div className="task-details">
          <h2>Task Created</h2>
          <p><strong>ID:</strong> {createdTask.id}</p>
          <p><strong>Title:</strong> {createdTask.title}</p>
          <p><strong>Description:</strong> {createdTask.description}</p>
          <p><strong>Status:</strong> {createdTask.status}</p>
          <p><strong>Due Date:</strong> {createdTask.dueDate}</p>
        </div>
      )}
    </div>
  );
}

export default App;

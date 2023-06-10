import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (task.trim()) {
      e.preventDefault();
      addTask(task);
      setTask('');
      setMessage('');
    } else {
      e.preventDefault();
      setMessage('Please, add a new task..');
      setTimeout(() => { setMessage(''); }, 3000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={task} onChange={handleChange} placeholder="Add a new task ..." className="input-text" />
        <br />
        <button type="submit" className="input-submit">
          <FaPlusCircle style={{ color: 'silver', fontSize: '1.2rem' }} />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default InputTodo;

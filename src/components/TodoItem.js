import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, setTodos, delItem, updateTask,
}) => {
  const hadlechange = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } return todo;
    }));
  };

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => hadlechange(itemProp.id)}
        />
        <button type="button" onClick={handleEdit}>
          <AiFillEdit className="btn" style={{ color: 'silver', fontSize: '1.2rem' }} />
        </button>
        <button type="button" onClick={() => delItem(itemProp.id)}>
          <BsFillTrashFill style={{ color: 'silver', fontSize: '1.1rem' }} />
        </button>
        <span style={itemProp.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{itemProp.title}</span>
      </div>
      <input type="text" value={itemProp.title} className={styles.textInput} style={editMode} onChange={(e) => { updateTask(e.target.value, itemProp.id); }} onKeyDown={handleEnter} />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TodoItem;

import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, setTodos, delItem, updateTask,
}) => (
  <ul className="list">
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delItem={delItem} updateTask={updateTask} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TodosList;

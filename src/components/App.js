import Header from './Header';
import TodosLogic from './TodosLogic';
import '../styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;

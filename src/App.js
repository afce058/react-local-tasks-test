import { useEffect, useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import Container from './components/Container';

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const addNewTask = (taskName) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(
        t => (t.name === task.name) ? { ...t, done: !t.done } : t
      )
    )
  }

  function clearCompleted() {
    setTaskItems(taskItems.filter(t => !t.done));
    setShowCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator addNewTask={addNewTask} />
        <TaskTable tasks={taskItems.filter(t => !t.done)} toggleTask={toggleTask} />
        <VisibilityControl
          showCompleted={showCompleted}
          onVisibilityChange={(state) => setShowCompleted(state)}
          clearCompletedTasks={clearCompleted} />
        {showCompleted &&
          (<TaskTable tasks={taskItems.filter(t => t.done)} toggleTask={toggleTask} />)
        }
      </Container>
    </main>
  );
}

export default App;

import React, {useState} from 'react';
import TaskList from "../src/components/TaskList";
import CreateTask from "../src/components/CreateTask";
import BulkDelete from "../src/components/BulkDelete";
import { Routes, Route, Navigate} from 'react-router-dom';
import { Task } from "./interfaces/TaskInterface";
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);


  const createTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const addCheckedTask = (id: string) =>
    setCheckedTasks([...checkedTasks, id]);

  const removeCheckedTask = (id: string) => {
    const uncheckedTasks: string[] = checkedTasks.filter(
      (checked) => checked !== id
    );
    setCheckedTasks([...uncheckedTasks]);
  };

  const deleteCheckedTasks = () => {
    const newTasks: Task[] = tasks.filter(
      (task) => !checkedTasks.includes(task.id)
    );
    setTasks([...newTasks]);
    setCheckedTasks([]);
  };
  return (
      <>    
      <NavbarComponent/>
      <Routes>
        <Route path="/list-tasks" element={<TaskList tasks={tasks}/>} />
        <Route
          path="/create-task"
          element={<CreateTask setTasks={createTask}/>}
        />
        <Route
          path="/bulk-delete"
          element={
            <BulkDelete 
              tasks={tasks} 
              addCheckedTask={addCheckedTask}
              removeCheckedTask={removeCheckedTask}
              deleteCheckedTasks={deleteCheckedTasks}/>
          }
        />
        <Route path="*" element={<Navigate to="/list-tasks" replace />} />
      </Routes>
      </>
  );
}

export default App;

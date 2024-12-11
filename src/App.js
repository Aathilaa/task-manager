import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import { Container, Typography, Box } from "@mui/material";

const App = () => {
  const [tasks, setTasks] = useState([]); // Stores all tasks
  const [isEditing, setIsEditing] = useState(false); // Tracks if the edit modal is open
  const [currentTask, setCurrentTask] = useState(null); // Stores the task being edited

  // Function to add a new task
  const addTask = (task) => setTasks([...tasks, task]);

  // Function to delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to handle editing a task
  const editTask = (index) => {
    setCurrentTask({ task: tasks[index], index });
    setIsEditing(true);
  };

  // Function to save an updated task
  const saveTask = (updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[currentTask.index] = updatedTask;
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
            Task Manager App
      </Typography>
      <Box sx={{ mb: 4 }}>
        <AddTask addTask={addTask} />
      </Box>
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      {isEditing && (
        <EditTaskModal
          isOpen={isEditing}
          task={currentTask?.task}
          onSave={saveTask}
          onClose={() => setIsEditing(false)}
        />
      )}
    </Container>
  );
};

export default App;



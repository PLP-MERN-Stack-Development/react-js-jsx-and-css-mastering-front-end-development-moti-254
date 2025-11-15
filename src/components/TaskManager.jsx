import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * TaskManager component for managing tasks
 */
export default function TaskManager() {
  const { theme } = useTheme();
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className={`transition-colors duration-200 ${
      theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
    }`}>
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      
      <div className={`rounded-lg transition-colors duration-200 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

          {/* Task input form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Add a new task..."
                className={`flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <Button type="submit" variant="primary">
                Add Task
              </Button>
            </div>
          </form>

          {/* Filter buttons */}
          <div className="flex gap-2 mb-4">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'active' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('active')}
            >
              Active
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>

          {/* Task list */}
          <ul className="space-y-2">
            {filteredTasks.length === 0 ? (
              <li className={`text-center py-4 transition-colors duration-200 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                No tasks found
              </li>
            ) : (
              filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className={`flex items-center justify-between p-3 border rounded-lg transition-colors duration-200 ${
                    theme === 'dark' 
                      ? 'border-gray-600 hover:bg-gray-600' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`transition-colors duration-200 ${
                        task.completed 
                          ? `line-through ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}` 
                          : ''
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                  >
                    Delete
                  </Button>
                </li>
              ))
            )}
          </ul>

          {/* Task stats */}
          <div className={`mt-6 text-sm transition-colors duration-200 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p>
              {tasks.filter((task) => !task.completed).length} tasks remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
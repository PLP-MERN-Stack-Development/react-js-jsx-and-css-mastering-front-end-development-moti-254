import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { filterTasks } from '../utils/filterTasks';
import { useTheme } from '../context/ThemeContext';

export default function Tasks() {
  const { theme } = useTheme();
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask, 
        completed: false,
        createdAt: new Date().toISOString()
      }]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = id => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));
  const filtered = filterTasks(tasks, filter);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className={`min-h-screen py-8 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`} >
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
        <Card title="Task Manager">
          {/* Task Input */}
          <div className="mb-6 flex gap-2">
            <input
              className={`flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
               theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
         }`}
              placeholder="Add a new task..."
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={addTask} variant="primary">
              Add Task
            </Button>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6">
            {['all', 'active', 'completed'].map(f => (
              <Button 
                key={f} 
                variant={filter === f ? 'primary' : 'secondary'} 
                onClick={() => setFilter(f)}
                size="sm"
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>

          {/* Task Stats */}
          {totalTasks > 0 && (
            <div className={`mb-4 text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {completedTasks} of {totalTasks} tasks completed
              {filter !== 'all' && ` (showing ${filtered.length} ${filter} tasks)`}
            </div>
          )}

          {/* Task List */}
          {filtered.length === 0 ? (
            <div className={`text-center py-8 transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {tasks.length === 0 
                ? "No tasks yet. Add your first task above!" 
                : `No ${filter} tasks found.`}
            </div>
          ) : (
            <ul className="space-y-3">
              {filtered.map(task => (
                <li 
                  key={task.id} 
                  className={`flex justify-between items-center p-4 rounded-lg border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className={`transition-colors duration-200 ${
                      task.completed 
                        ? `line-through ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}` 
                        : (theme === 'dark' ? 'text-white' : 'text-gray-900')
                    }`}>
                      {task.text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={task.completed ? "secondary" : "primary"} 
                      onClick={() => toggleTask(task.id)}
                      size="sm"
                    >
                      {task.completed ? 'Undo' : 'Complete'}
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => deleteTask(task.id)}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Clear Completed Tasks */}
          {completedTasks > 0 && filter === 'all' && (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button 
                variant="danger"
                onClick={() => setTasks(tasks.filter(task => !task.completed))}
                size="sm"
              >
                Clear Completed Tasks ({completedTasks})
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
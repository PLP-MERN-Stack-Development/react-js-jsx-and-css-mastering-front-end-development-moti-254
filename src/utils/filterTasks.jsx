export function filterTasks(tasks, filter) {
  switch (filter) {
    case 'active':
      return tasks.filter(t => !t.completed);
    case 'completed':
      return tasks.filter(t => t.completed);
    default:
      return tasks;
  }
}

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title} - {task.description}
            </span>
            <button onClick={() => updateTask(task._id, { ...task, completed: !task.completed })}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  
import delay from './delay';

let tasks = [
  {
    "id": "1",
    "users": ["user", "agent0"],
    "task": "Task 1"
  },
  {
    "id": "2",
    "users": ["user", "agent0"],
    "task": "Task 2"
  }
];

const generateId = () => {
  return new Date().toLocaleTimeString();
};

class TaskApi {
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveTask(task) {
    task = Object.assign({}, task); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        task.id = generateId();
        tasks.push(task);
        resolve(task);
      }, delay);
    });
  }

  static deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = tasks.findIndex(task => {
          return task.id === taskId;
        });

        tasks.splice(index, 1);
        resolve(taskId);
      }, delay);
    });
  }
}

export default TaskApi;

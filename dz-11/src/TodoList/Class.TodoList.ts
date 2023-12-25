import { TTaskTodo, ITodoList, TaskType } from "./Model.todolist";

class TodoList implements ITodoList {
  private _todoList;
  constructor(todoList: TTaskTodo[]) {
    this._todoList = todoList;
  }

  addNewTaskTodo = (task: TTaskTodo): void => {
    this._todoList.push(task);
  };

  removeTaskTodo = (id: string): void => {
    this._todoList = this._todoList.filter((tasks) => tasks.uuid !== id);
  };

  editTaskTodo = (id: string, title: string, content: string, status: boolean, taskType: TaskType): void => {
    let task = this._todoList.find((task) => task.uuid === id);
    if (task) {
      if (task.taskType === TaskType.confirm) {
        console.log("Type of Task Confirm, do something");
      }
      if (title.trim() !== "") {
        task = { ...task, taskTitle: title, taskContent: content, taskDate: new Date(), isDone: status, taskType: taskType };
        this._todoList.map((key, value) => {
          if (key.uuid === id) {
            this._todoList[value] = task!;
          }
        });
      }
    } else {
      console.log(`Can't modify Task id = ${id}`);
    }
  };

  getTaskTodoInfo = (id: string): TTaskTodo | null => {
    const task = this._todoList.find((task) => task.uuid === id);
    if (task) {
      return { ...task };
    }
    return null;
  };

  getTodoList = (): TTaskTodo[] => {
    return [...this._todoList];
  };

  changeTaskStatus = (id: string, status: boolean): void => {
    let task = this._todoList.find((task) => task.uuid === id);
    if (task) {
      if (task.isDone !== status) {
        task = { ...task, isDone: status };
        this._todoList.map((key, value) => {
          if (key.uuid === id) {
            this._todoList[value] = task!;
          }
        });
      } else {
        return;
      }
    }
    return;
  };

  getCountOfTasks = (): number => {
    return this._todoList.length;
  };

  getCountOfUndoneTasks = (): number => {
    let undoneTasks = [];
    undoneTasks = this._todoList.filter((tasks) => !tasks.isDone);
    return undoneTasks.length;
  };
}

export default TodoList;

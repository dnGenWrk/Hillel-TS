enum TaskType {
  "default",
  "confirm",
}
type TTaskTodo = {
  uuid: string;
  taskTitle: string;
  taskContent?: string;
  taskDate: Date;
  isDone: boolean;
  taskType: TaskType;
};

interface ITodoList {
  addNewTaskTodo: (task: TTaskTodo) => void;
  removeTaskTodo: (id: string) => void;
  editTaskTodo: (id: string, title: string, content: string, status: boolean, taskType: TaskType) => void;
  getTaskTodoInfo: (id: string) => TTaskTodo | null;
  getTodoList: () => TTaskTodo[];
}

export type { TTaskTodo, ITodoList };
export { TaskType };

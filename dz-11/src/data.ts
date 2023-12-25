import { TTaskTodo, TaskType } from "./TodoList/Model.todolist";

const testList: TTaskTodo[] = [
  {
    uuid: "fafgssgsdgsd",
    taskTitle: "Test task 1",
    taskContent: "Test content for task1",
    taskDate: new Date("2023-06-10"),
    isDone: false,
    taskType: TaskType.default,
  },
  {
    uuid: "fasegwegewg32se",
    taskTitle: "Here is test title2",
    taskContent: "Content for task2",
    taskDate: new Date("2023-04-02"),
    isDone: false,
    taskType: TaskType.default,
  },
  {
    uuid: "sf324fssafagdsevv",
    taskTitle: "C variant of Title",
    taskDate: new Date("2023-03-02"),
    isDone: false,
    taskType: TaskType.default,
  },
];

export default testList;

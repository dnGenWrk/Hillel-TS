import { TTaskTodo } from "../TodoList/Model.todolist";

enum FilterTypes {
  "date",
  "status",
}
interface IFilter {
  list: TTaskTodo[];
  getFilteredList: (filter: FilterTypes) => TTaskTodo[];
}

export type { IFilter };
export { FilterTypes };

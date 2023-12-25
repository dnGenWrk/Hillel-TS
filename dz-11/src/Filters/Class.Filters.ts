import { TTaskTodo } from "../TodoList/Model.todolist";
import { FilterTypes, IFilter } from "./Model.filters";

class Filters implements IFilter {
  constructor(public list: TTaskTodo[]) {}

  getFilteredList = (filter: FilterTypes): TTaskTodo[] => {
    let result: TTaskTodo[] = [];
    if (filter === FilterTypes.date) {
      result = this.list.sort(function (a: TTaskTodo, b: TTaskTodo): number {
        if (a.taskDate > b.taskDate) {
          return -1;
        } else if (a.taskDate < b.taskDate) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      const arrDone = this.list.filter((el) => el.isDone);
      const arrUndone = this.list.filter((el) => !el.isDone);
      result = result.concat(arrDone, arrUndone);
    }
    return result;
  };
}

export default Filters;

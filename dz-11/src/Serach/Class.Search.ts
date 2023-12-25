import { TTaskTodo } from "../TodoList/Model.todolist";

enum SearchType {
  "byTitle",
  "byContent",
}

class Search {
  static find = (type: SearchType, list: TTaskTodo[], searchString: string): TTaskTodo[] | null => {
    //let whereToSearch: "taskTitle" | "taskContent" = type === SearchType.byTitle ? "taskTitle" : "taskContent";
    let whereToSearch: "taskTitle" | "taskContent" = "taskContent";
    if (type === SearchType.byTitle) {
      whereToSearch = "taskTitle";
    }
    const res = list.filter((el) => {
      if (whereToSearch === "taskContent" && el[whereToSearch] === undefined) {
        return null;
      }
      return el[whereToSearch]!.includes(searchString);
    });
    if (res.length > 0) {
      return res;
    } else {
      return null;
    }
  };
}

export { Search, SearchType };

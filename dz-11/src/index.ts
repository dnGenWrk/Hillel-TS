import Filters from "./Filters/Class.Filters";
import { FilterTypes } from "./Filters/Model.filters";
import { Search, SearchType } from "./Serach/Class.Search";
import TodoList from "./TodoList/Class.TodoList";
import { TTaskTodo, TaskType } from "./TodoList/Model.todolist";
import testList from "./data";

const todoList = new TodoList(testList);
console.log("Get todoList", todoList.getTodoList());

// Add new Todo Task
const newTask: TTaskTodo = {
  uuid: "dsfgsdgsnewtasksdg332",
  taskTitle: "New Task",
  taskContent: "New task Content",
  taskDate: new Date(),
  isDone: false,
  taskType: TaskType.confirm,
};

todoList.addNewTaskTodo(newTask);
console.log("Add new task ", todoList.getTodoList());

// Edit task2 (id fasegwegewg32se)
todoList.editTaskTodo("fasegwegewg32se", "Edited Tile for task 2", "Edited content for task 2", false, TaskType.confirm);
console.log("Task 2 was edited ", todoList.getTodoList());

// Change status for task1 id(fafgssgsdgsd)
todoList.changeTaskStatus("fafgssgsdgsd", true);
console.log("Status for task1 was updated ", todoList.getTodoList());

// Remove task (New Task id dsfgsdgsnewtasksdg332)
todoList.removeTaskTodo("dsfgsdgsnewtasksdg332");
console.log("New Task Removed ", todoList.getTodoList());

// Get info about task1 (id fafgssgsdgsd)
console.log("Info about task id fafgssgsdgsd", todoList.getTaskTodoInfo("fafgssgsdgsd"));

// Get counts of undone tasks / count of all tasks
console.log("count of undone tasks = ", todoList.getCountOfUndoneTasks(), "Count of all tasks = ", todoList.getCountOfTasks());

//Search
const searchValues = {
  value1: "Title",
  value2: "test",
  value3: "Test task 1",
  value4: "C variant of Title",
  value5: "Edited content for task 2",
};
//Search by title
console.log(`Search in task "${searchValues.value1}"`, Search.find(SearchType.byTitle, todoList.getTodoList(), searchValues.value1));
console.log(`Search in task "${searchValues.value3}"`, Search.find(SearchType.byTitle, todoList.getTodoList(), searchValues.value3));
//Search by content
console.log(`Search in task "${searchValues.value4}"`, Search.find(SearchType.byContent, todoList.getTodoList(), searchValues.value4));
console.log(`Search in task "${searchValues.value5}"`, Search.find(SearchType.byContent, todoList.getTodoList(), searchValues.value5));

//Filter
const filter = new Filters(todoList.getTodoList());
console.log("Filtered by date = ", filter.getFilteredList(FilterTypes.date));
//console.log("Filtered by status = ", filter.getFilteredList(FilterTypes.status));

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getFormattedDateAndTime } from '../../utils/currentTime';
import { InitState, TodoInterface } from '../../interfaces';
import { languageDataEngUkr } from '../../utils/languages';
import { engLangData, ukrLangData } from '../../utils/languages';

interface EditTaskAction {
  newText: string;
  id: string;
}

interface putTaskOnSomebodyAction {
  id: string;
  text: string;
  employee: string;
}

const initialState: InitState = {
  actions: {
    english: [],
    ukranian: [],
  },
  todos: [],
  employees: ['Nobody'],
  languages: languageDataEngUkr,
};

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<string>) {
      const timeNewTask: string = getFormattedDateAndTime();
      const textNewTaskEng: string = `Task (${action.payload}) added to database - ${timeNewTask}`;
      const textNewTaskUkr: string = `Завдання (${action.payload}) додано до бази даних - ${timeNewTask}`;
      const updateNewTaskActionsEng = [
        ...state.actions.english,
        textNewTaskEng,
      ];
      const updateNewTaskActionsUkr = [
        ...state.actions.ukranian,
        textNewTaskUkr,
      ];
      const newTask: TodoInterface = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        responsiblePerson: 'Nobody',
      };
      const newToDoState: TodoInterface[] = [...state.todos, newTask];
      return {
        ...state,
        todos: newToDoState,
        actions: {
          english: updateNewTaskActionsEng,
          ukranian: updateNewTaskActionsUkr,
        },
      };
    },
    editTask(state, action: PayloadAction<EditTaskAction>) {
      const findEditedTask: string = state.todos.filter(
        (task) => task.id === action.payload.id
      )[0].text;
      const updateEditTask: TodoInterface[] = state.todos.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.newText };
        }
        return task;
      });
      const timeEditTask: string = getFormattedDateAndTime();
      const textEditedTasksEng: string = `Task "${findEditedTask}" edited to "${action.payload.newText}" - ${timeEditTask}`;
      const textEditedTasksUkr: string = `Завдання "${findEditedTask}" змінено на "${action.payload.newText}" - ${timeEditTask}`;
      const updatedEditedTaskActionsEng = [
        ...state.actions.english,
        textEditedTasksEng,
      ];
      const updatedEditedTaskActionsUkr = [
        ...state.actions.ukranian,
        textEditedTasksUkr,
      ];
      return {
        ...state,
        todos: updateEditTask,
        actions: {
          english: updatedEditedTaskActionsEng,
          ukranian: updatedEditedTaskActionsUkr,
        },
      };
    },
    removeTask(state, action: PayloadAction<string>) {
      const findNameForRemove: string = state.todos.filter(
        (task) => task.id === action.payload
      )[0].text;
      const timeRemoveTask: string = getFormattedDateAndTime();
      const textRemoveTaskEng: string = `Task (${findNameForRemove}) was deleted - ${timeRemoveTask}`;
      const textRemoveTaskUkr: string = `Завдання (${findNameForRemove}) видалено - ${timeRemoveTask}`;
      const updateRemoveTaskActionsEng = [
        ...state.actions.english,
        textRemoveTaskEng,
      ];
      const updateRemoveTaskActionsUkr = [
        ...state.actions.ukranian,
        textRemoveTaskUkr,
      ];
      const updateTasks: TodoInterface[] = state.todos.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        todos: updateTasks,
        actions: {
          english: updateRemoveTaskActionsEng,
          ukranian: updateRemoveTaskActionsUkr,
        },
      };
    },
    completeTask(state, action: PayloadAction<string>) {
      const getCompleteStatus: TodoInterface[] = state.todos.filter(
        (task) => task.id === action.payload
      );
      const getCurrentStatus: boolean = getCompleteStatus[0].completed;
      const getCurrentText: string = getCompleteStatus[0].text;
      const getCurrentEmployee: string = getCompleteStatus[0].responsiblePerson;
      const completeTasks: TodoInterface[] = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const timeStatusTask: string = getFormattedDateAndTime();
      const textCompleteTaskEng: string = `Task (${getCurrentText}) marked like ${
        getCurrentStatus
          ? `not completed ${
              getCurrentEmployee !== 'Nobody' ? 'by ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
          : `completed ${
              getCurrentEmployee !== 'Nobody' ? 'by ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
      }`;
      const textCompleteTaskUkr: string = `Завдання (${getCurrentText}), позначене як ${
        getCurrentStatus
          ? `не завершено ${
              getCurrentEmployee !== 'Ніхто' ? 'від ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
          : `завершено ${
              getCurrentEmployee !== 'Ніхто' ? 'від ' + getCurrentEmployee : ''
            } - ${timeStatusTask}`
      }`;
      const updateCompleteTaskActionsEng = [
        ...state.actions.english,
        textCompleteTaskEng,
      ];
      const updateCompleteTaskActionsUkr = [
        ...state.actions.ukranian,
        textCompleteTaskUkr,
      ];
      return {
        ...state,
        todos: completeTasks,
        actions: {
          english: updateCompleteTaskActionsEng,
          ukranian: updateCompleteTaskActionsUkr,
        },
      };
    },
    clearCompleted(state, action: PayloadAction) {
      const clearCompletedData: TodoInterface[] = state.todos.filter(
        (task) => task.completed === false
      );
      const timeClearTasks: string = getFormattedDateAndTime();
      const textClearCompletedTasksEng: string = `All completed tasks was deleted - ${timeClearTasks}`;
      const textclearCompletedTasksUkr: string = `Усі виконані завдання видалено - ${timeClearTasks}`;
      const updateClearCompletedTaskActionsEng = [
        ...state.actions.english,
        textClearCompletedTasksEng,
      ];
      const updateClearCompletedTaskActionsUkr = [
        ...state.actions.ukranian,
        textclearCompletedTasksUkr,
      ];
      return {
        ...state,
        todos: clearCompletedData,
        actions: {
          english: updateClearCompletedTaskActionsEng,
          ukranian: updateClearCompletedTaskActionsUkr,
        },
      };
    },
    clearAllTasks(state, action: PayloadAction) {
      return {
        ...state,
        actions: {
          english: [],
          ukranian: [],
        },
        todos: [],
      };
    },
    newEmployee(state, action: PayloadAction<string>) {
      const timeNewEmployee: string = getFormattedDateAndTime();
      const textNewEmployeeEng: string = `Employee ${action.payload} added to database - ${timeNewEmployee}`;
      const textNewEmployeeUkr: string = `Співробітника ${action.payload} додано до бази даних - ${timeNewEmployee}`;
      const updateNewEmployeeActionEng = [
        ...state.actions.english,
        textNewEmployeeEng,
      ];
      const updateNewEmployeeActionUkr = [
        ...state.actions.ukranian,
        textNewEmployeeUkr,
      ];
      return {
        ...state,
        employees: [...state.employees, action.payload],
        actions: {
          english: updateNewEmployeeActionEng,
          ukranian: updateNewEmployeeActionUkr,
        },
      };
    },
    removeEmployee(state, action: PayloadAction<string>) {
      const timeDeleteEmployee: string = getFormattedDateAndTime();
      const textDeleteEmployeeEng: string = `Employee ${action.payload} removed from database - ${timeDeleteEmployee}`;
      const textDeleteemployeeUkr: string = `Співробітника ${action.payload} видалено з бази даних - ${timeDeleteEmployee}`;
      const updateDeleteEmployeeActionEng = [
        ...state.actions.english,
        textDeleteEmployeeEng,
      ];
      const updateDeleteEmployeeActionUkr = [
        ...state.actions.ukranian,
        textDeleteemployeeUkr,
      ];
      const getAllTasksWithEmployee: TodoInterface[] = state.todos.map(
        (todo) => {
          if (todo.responsiblePerson === action.payload) {
            return {
              ...todo,
              responsiblePerson:
                state.languages.currentLanguage !== 'English'
                  ? 'Ніхто'
                  : 'Nobody',
            };
          }
          return todo;
        }
      );
      const filterEmployees: string[] = state.employees.filter(
        (employee) => employee !== action.payload
      );
      return {
        ...state,
        todos: getAllTasksWithEmployee,
        employees: filterEmployees,
        actions: {
          english: updateDeleteEmployeeActionEng,
          ukranian: updateDeleteEmployeeActionUkr,
        },
      };
    },
    changeLanguage(state, action: PayloadAction<string>) {
      if (action.payload === 'English') {
        const updateEmployeesDefault: string[] = state.employees.map((item) => {
          if (item === 'Ніхто') {
            return 'Nobody';
          }
          return item;
        });
        return {
          ...state,
          employees: updateEmployeesDefault,
          languages: {
            currentDataBase: engLangData,
            currentLanguage: 'English',
          },
        };
      }
      if (action.payload === 'Ukrainian') {
        const updateEmployeesDefault: string[] = state.employees.map((item) => {
          if (item === 'Nobody') {
            return 'Ніхто';
          }
          return item;
        });
        return {
          ...state,
          employees: updateEmployeesDefault,
          languages: {
            currentDataBase: ukrLangData,
            currentLanguage: 'Ukrainian',
          },
        };
      }
      return state;
    },
    putTaskOnSomebody(state, action: PayloadAction<putTaskOnSomebodyAction>) {
      const timeSelectEmployee: string = getFormattedDateAndTime();
      const textPutOnTaskEmployeeEng: string = `Task ${action.payload.text} now on ${action.payload.employee} - ${timeSelectEmployee}`;
      const textPutOnTaskEmployeeUkr: string = `Завдання ${action.payload.text} зараз на ${action.payload.employee} - ${timeSelectEmployee}`;
      const updateActionsPutTaskEng = [
        ...state.actions.english,
        textPutOnTaskEmployeeEng,
      ];
      const updateActionsPutTaskUkr = [
        ...state.actions.ukranian,
        textPutOnTaskEmployeeUkr,
      ];
      const updatedTodos: TodoInterface[] = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, responsiblePerson: action.payload.employee };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        actions: {
          english: updateActionsPutTaskEng,
          ukranian: updateActionsPutTaskUkr,
        },
      };
    },
    reorderTodos(state, action: PayloadAction<TodoInterface[]>) {
      // state.todos = action.payload;
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
});
export const {
  addNewTask,
  removeTask,
  completeTask,
  clearAllTasks,
  clearCompleted,
  editTask,
  newEmployee,
  removeEmployee,
  changeLanguage,
  putTaskOnSomebody,
  reorderTodos,
} = tasksSlice.actions;
export default tasksSlice.reducer;

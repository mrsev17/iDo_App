export interface StateToogle {
  mode: {
    toggle: boolean;
  };
}

export interface EmployeeProps {
  employee: string;
  id: number;
}

export interface EmployeeTaskProps {
  text: string;
  completed: boolean;
  id: number;
}

export interface SelectProps {
  responsiblePerson: string;
  id: string;
  text: string;
}

export interface TodoInterface {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
}

export interface ToDoEditModalProps {
  text: string;
  id: string;
}

export interface PersonalListProps {
  getTasksEmployee: TodoInterface[];
}

export interface LanguageTranslations {
  header: {
    title: string;
    ukrOptionsToggle: string;
    engOptionsToogle: string;
  };
  mainPage: {
    title: string;
    placeHolderNewTodo: string;
    submitNewTodo: string;
    infoAboutEmptyList: string;
    statusComplete: string;
    statusInProgress: string;
    currentEmployee: string;
    editTaskTitle: string;
    editTaskLabel: string;
    editTaskSubmit: string;
  };
  employeesPage: {
    title: string;
    placeholderNewEmployee: string;
    submitNewEmployee: string;
    titleListEmployee: string;
    actionsBtn: string;
    titleCardActions: string;
    deleteBtn: string;
    closeModalBtn: string;
    statusSub: string;
    currentStatusInProgress: string;
    currentStatusComplete: string;
  };
  operationsPage: {
    title: string;
    titleEmptyList: string;
  };
  navigation: {
    tasks: string;
    employees: string;
    operations: string;
  };
  footer: {
    clearAllData: string;
    removeCompleted: string;
  };
}

export interface LanguageDataObject {
  currentLanguage: string;
  currentDataBase: LanguageTranslations;
}

export interface LanguageSelect {
  currentLanguage: string;
  languageData: LanguageDataObject;
}
export interface InitState {
  actions: string[];
  todos: TodoInterface[];
  employees: string[];
  languages: LanguageDataObject;
}

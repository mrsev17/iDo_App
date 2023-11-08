// Data for language

import { LanguageDataObject } from '../interfaces';

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
    modalTitle: string;
    modalCloseBtn: string;
    clearAllData: string;
    removeCompleted: string;
  };
}

export interface LanguageSelect {
  currentLanguage: string;
  languageData: LanguageTranslations;
}

export const ukrLangData: LanguageTranslations = {
  header: {
    title: 'Додаток ToDo',
    ukrOptionsToggle: 'Українська',
    engOptionsToogle: 'Англійська',
  },
  mainPage: {
    title: 'Створити нове завдання',
    placeHolderNewTodo: 'Введіть нове завдання',
    submitNewTodo: 'Додати завдання',
    infoAboutEmptyList: 'Список порожній',
    statusComplete: 'Виконано',
    statusInProgress: 'Не виконано',
    currentEmployee: 'Ніхто',
    editTaskTitle: 'Редагувати завдання',
    editTaskLabel: 'Редагувати',
    editTaskSubmit: 'Змінити',
  },
  employeesPage: {
    title: 'Співробітники',
    placeholderNewEmployee: 'Додати нового співробітника',
    submitNewEmployee: 'Додати нового співробітника',
    titleListEmployee: 'Додати співробітника',
    actionsBtn: 'Дії',
    titleCardActions: 'Дії зі співробітником',
    deleteBtn: 'Видалити співробітника',
    closeModalBtn: 'Закрити',
    statusSub: 'Cтатус: ',
    currentStatusInProgress: 'В процесі',
    currentStatusComplete: 'Завершено',
  },
  operationsPage: {
    title: 'Ця сторінка для огляду дій користувача',
    titleEmptyList:
      'Виконайте деякі дії в додатку, і список буде заповнено діями',
  },
  navigation: {
    tasks: 'Завдання',
    employees: 'Співробітники',
    operations: 'Операції',
  },
  footer: {
    modalTitle: 'Налаштування',
    modalCloseBtn: 'Закрити',
    clearAllData: 'Видалити всі дані про завдання',
    removeCompleted: 'Видалити виконані завдання',
  },
};

export const engLangData: LanguageTranslations = {
  header: {
    title: 'ToDo App',
    ukrOptionsToggle: 'Ukrainian',
    engOptionsToogle: 'English',
  },
  mainPage: {
    title: 'Create a new task',
    placeHolderNewTodo: 'Enter a new task',
    submitNewTodo: 'Add task',
    infoAboutEmptyList: 'The list is empty',
    statusComplete: 'Completed',
    statusInProgress: 'Not completed',
    currentEmployee: 'Nobody',
    editTaskTitle: 'Edit task',
    editTaskLabel: 'Edit',
    editTaskSubmit: 'Modify',
  },
  employeesPage: {
    title: 'Employees',
    placeholderNewEmployee: 'Add new employee',
    submitNewEmployee: 'Add new employee',
    titleListEmployee: 'Add employee',
    actionsBtn: 'Actions',
    titleCardActions: 'Actions with employee',
    deleteBtn: 'Delete Employee',
    closeModalBtn: 'close',
    statusSub: 'Status: ',
    currentStatusInProgress: 'In progress',
    currentStatusComplete: 'Complete',
  },
  operationsPage: {
    title: 'This page for OPERATIONS',
    titleEmptyList:
      'Make some actions in app and list will be filled with actions',
  },
  navigation: {
    tasks: 'Tasks',
    employees: 'Employees',
    operations: 'Operations',
  },
  footer: {
    modalTitle: 'Settings',
    modalCloseBtn: 'Close',
    clearAllData: 'Clear all data about tasks',
    removeCompleted: 'Remove completed tasks',
  },
};

export const languageDataEngUkr: LanguageDataObject = {
  currentLanguage: 'English',
  currentDataBase: {
    header: {
      title: 'ToDo App',
      ukrOptionsToggle: 'Ukrainian',
      engOptionsToogle: 'English',
    },
    mainPage: {
      title: 'Create a new task',
      placeHolderNewTodo: 'Enter a new task',
      submitNewTodo: 'Add task',
      infoAboutEmptyList: 'The list is empty',
      statusComplete: 'Completed',
      statusInProgress: 'Not completed',
      currentEmployee: 'Nobody',
      editTaskTitle: 'Edit task',
      editTaskLabel: 'Edit',
      editTaskSubmit: 'Modify',
    },
    employeesPage: {
      title: 'Employees',
      placeholderNewEmployee: 'Add new employee',
      submitNewEmployee: 'Add new employee',
      titleListEmployee: 'Add employee',
      actionsBtn: 'Actions',
      titleCardActions: 'Actions with employee',
      deleteBtn: 'Delete Employee',
      closeModalBtn: 'close',
      statusSub: 'Status',
      currentStatusInProgress: 'In progress',
      currentStatusComplete: 'Complete',
    },
    operationsPage: {
      title: 'This page for OPERATIONS',
      titleEmptyList:
        'Make some actions in app and list will be filled with actions',
    },
    navigation: {
      tasks: 'Tasks',
      employees: 'Employees',
      operations: 'Operations',
    },
    footer: {
      modalTitle: 'Settings',
      modalCloseBtn: 'Close',
      clearAllData: 'Clear all data about tasks',
      removeCompleted: 'Remove completed tasks',
    },
  },
};

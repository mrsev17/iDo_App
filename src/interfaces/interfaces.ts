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

export interface InitState {
  actions: string[];
  todos: TodoInterface[];
  employees: string[];
}

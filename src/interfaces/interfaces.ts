export interface StateToogle {
  mode: {
    toggle: boolean;
  };
}

export interface SelectProps {
  responsiblePerson: string;
  id: string;
}

export interface TodoInterface {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson: string;
}

export interface InitState {
  actions: string[];
  todos: TodoInterface[];
  employees: string[];
}

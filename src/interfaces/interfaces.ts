export interface stateToogle {
  mode: {
    toggle: boolean;
  };
}

export interface TodoInterface {
  text: string;
  id: string;
  completed: boolean;
  responsiblePerson?: string;
}

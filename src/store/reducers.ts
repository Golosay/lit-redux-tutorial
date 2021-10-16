import { ACTION_LIST } from './actions.js';

export interface ITask {
  label: string;
  done: boolean;
}

export interface IStore {
  tasks: ITask[];
}

const initialStore: IStore = {
  tasks: [],
};

export function reducer(state = initialStore, action: any) {
  switch (action.type) {
    case ACTION_LIST.ADDTASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            label: action.label,
            done: false,
          },
        ],
      };
    case ACTION_LIST.MARKTASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index !== action.payload.index
            ? task
            : { ...task, done: action.payload.checked }
        ),
      };

    default:
      return state;
  }
}

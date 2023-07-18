import * as actions from "./actionTypes";

type ActionType = {
  type: string;
  payload: {
    id: number;
    description: string;
  };
};

type BugType = {
  id: number;
  description: string;
  resolved: boolean;
};

let lastId = 0;

export default function reducer(state: BugType[] = [], action: ActionType) {
  if (action.type == actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type == actions.BUG_DELETED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}

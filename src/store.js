import { createStore } from "redux";

// Initial state
const initialState = {
  tasks: [],
};

// Actions
const FETCH_TASKS = "FETCH_TASKS";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_REMINDER = "TOGGLE_REMINDER";

// Action creators
export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleReminder = (id) => ({
  type: TOGGLE_REMINDER,
  payload: id,
});

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          { ...action.payload, id: state.tasks.length + 1 },
          ...state.tasks,
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_REMINDER:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, reminder: !task.reminder }
            : task
        ),
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(taskReducer);

export default store;

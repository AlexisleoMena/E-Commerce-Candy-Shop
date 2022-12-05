import { GET_ALL_USERS } from "./actions";

const initialState = {
  users: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}

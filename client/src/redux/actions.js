import axios from "axios";

export const GET_ALL_USERS = "GET_ALL_USERS";

export function get_all_users() {
  return async function (dispatch) {
    try {
      // let res = await fetch("http://localhost:3001");
      // let data = await res.json();
      let { data } = await axios("/");
      return dispatch({ type: GET_ALL_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

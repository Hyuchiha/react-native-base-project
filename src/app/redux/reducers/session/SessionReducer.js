import jwtDecode from 'jwt-decode';
import { AuthActionTypes } from "../../actions/AuthActions";

export const INITIAL_STATE = {
  loading: false,
  session: null,
  authorized: false
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        loading: true,
        ...state
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      if (action.payload) {
        const { token } = action.payload.data;
        const authorized = token && jwtDecode(token).exp > (Date.now() / 1000);
        const decodeUser = authorized && jwtDecode(token);

        return {
          loading: false,
          session: decodeUser,
          authorized
        };
      }
      return state;
    case AuthActionTypes.LOGIN_FAIL:
      return {
        loading: false,
        ...state
      };
    case AuthActionTypes.VALIDATE_SESSION:
      return {
        loading: true,
        ...state
      };
    case AuthActionTypes.UPDATE_SESSION:
      return {
        loading: false,
        ...action.payload
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default sessionReducer;

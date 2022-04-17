const AuthActionTypes = {
  LOGIN: '[AUTH] Login user',
  LOGIN_SUCCESS: '[AUTH] Login success',
  LOGIN_FAIL: '[AUTH] Login fail',
  LOGOUT: '[AUTH] Logout user',
  UPDATE_SESSION: '[AUTH] Update session',
  REGISTER_START: '[REGISTER] Start register',
  REGISTER_SUCCESS: '[REGISTER] Register success'
};

export function login(props) {
  return {
    type: AuthActionTypes.LOGIN,
    payload: {
      ...props
    }
  };
}

export function logout() {
  return {
    type: AuthActionTypes.LOGOUT
  };
}

export function updateSession(props) {
  return {
    type: AuthActionTypes.UPDATE_SESSION,
    payload: {
      ...props
    }
  };
}

export function startRegister(props) {
  return {
    type: AuthActionTypes.REGISTER_START,
    payload: props
  };
}

const AuthActions = {
  login,
  logout,
  updateSession,
  startRegister
};

export { AuthActions, AuthActionTypes };

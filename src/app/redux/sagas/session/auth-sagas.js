import { all, takeLatest } from 'redux-saga/effects'
import { generateSecureStorage, SessionStorage, StoreKeys } from "../../../api/Storage";
import jwtDecode from "jwt-decode";
import api from "../../../api/Api";
import StoreWrapper from "../../../api/StoreWrapper";
import { AuthActionTypes, logout, updateSession } from "../../actions/auth-actions";
import AuthService from "../../../services/Auth/AuthService";

function* validateSession() {
  const currentToken = SessionStorage.getString(StoreKeys.TOKEN);
  const currentRefreshToken = SessionStorage.getString(StoreKeys.REFRESH_TOKEN);

  const authorized = currentToken && jwtDecode(currentToken).exp > (Date.now() / 1000);

  if (authorized) {
    saveTokenAndDecode(currentToken, currentRefreshToken);
    makeApiCalls();
  } else if (currentRefreshToken) {

    try {
      const refreshResponse = yield AuthService.refreshToken(currentRefreshToken);
      const { token, refreshToken } = refreshResponse.data.data;

      api.updateTokens(token, refreshToken);
      saveTokenAndDecode(token, refreshToken);
      makeApiCalls();
    } catch (err) {
     yield setupStoreNoSession();
    }
  } else {
    // No session or Token, lets send to Initial Screen
    yield setupStoreNoSession();
  }
}

// Simple validations
function saveTokenAndDecode(currentToken, refreshToken) {
  api.setToken(currentToken);
  api.setRefreshToken(refreshToken);

  const decodeUser = jwtDecode(currentToken);
  const store = StoreWrapper.getStore();

  store.dispatch(updateSession({
    session: decodeUser,
    authorized: true
  }));

  // We create the user secureStorage
  generateSecureStorage();
}

function makeApiCalls() {

}

async function setupStoreNoSession() {
  await new Promise(function(resolve) {
    setTimeout(resolve, 1000);
  });

  const store = StoreWrapper.getStore();
  store.dispatch(updateSession({}));
}

export default function* watchSession() {
  yield all([
    takeLatest(AuthActionTypes.VALIDATE_SESSION, validateSession)
  ])
}

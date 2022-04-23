import { SessionStorage, StoreKeys } from "../../../api/Storage";
import jwtDecode from "jwt-decode";
import api from "../../../api/Api";
import StoreWrapper from "../../../api/StoreWrapper";
import { updateSession } from "../../actions/AuthActions";
import AuthService from "../../../services/Auth/AuthService";

function* validateSession(action) {
  const currentToken = Storage.Session.getString(StoreKeys.TOKEN);
  const currentRefreshToken = Storage.Session.getString(StoreKeys.REFRESH_TOKEN);

  const authorized = currentToken && jwtDecode(currentToken).exp > (Date.now() / 1000);

  if (authorized) {
    saveTokenAndDecode(currentToken, currentRefreshToken);
    makeApiCalls();
  } else if (currentRefreshToken) {

    const refreshResponse = yield AuthService.refreshToken(currentRefreshToken);
    const { token, refreshToken } = refreshResponse.data.data;

    api.updateTokens(token, refreshToken);
    saveTokenAndDecode(token, refreshToken);
    makeApiCalls();
  }
}

function saveTokenAndDecode(currentToken, refreshToken) {
  api.setToken(currentToken);
  api.setRefreshToken(refreshToken);

  const decodeUser = jwtDecode(currentToken);
  const store = StoreWrapper.getStore();

  store.dispatch(updateSession({
    session: decodeUser,
    authorized: true
  }));
}

function makeApiCalls() {

}

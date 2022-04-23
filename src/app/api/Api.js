import { SessionStorage, StoreKeys } from "./Storage";

let _token;
let _refreshToken;

function setToken(token) {
  _token = token;
}

function setRefreshToken(refreshToken) {
  _refreshToken = refreshToken;
}

function getToken() {
  return _token;
}

function getRefreshToken() {
  return _refreshToken;
}

function removeToken() {
  _token = null;
  _refreshToken = null;
}

function updateTokens(token, refreshToken) {
  SessionStorage.set(StoreKeys.TOKEN, token);
  SessionStorage.set(StoreKeys.REFRESH_TOKEN, refreshToken);

  setToken(token);
  setRefreshToken(refreshToken);
}

export default {
  setToken,
  getToken,
  setRefreshToken,
  getRefreshToken,
  removeToken,
  updateTokens
};

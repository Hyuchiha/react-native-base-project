import { all, fork } from 'redux-saga/effects';
import watchSession from "./session/auth-sagas";

export default function* root() {
  yield all([
    fork(watchSession)
  ]);
}

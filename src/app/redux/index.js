import configureStore from './create-store';
import rootSaga from './sagas';
import { AuthActionTypes } from './actions/auth-actions';
import appReducer from './reducers';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = (state, action) => {
    if (action.type === AuthActionTypes.LOGOUT) {
      // eslint-disable-next-line no-param-reassign
      state = undefined;
    }

    return appReducer(state, action);
  };

  /* ------------- Connect Types To Sagas ------------- */
  return configureStore(rootReducer, rootSaga);
};

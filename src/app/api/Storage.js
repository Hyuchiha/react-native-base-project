import { MMKV } from 'react-native-mmkv';
import StoreWrapper from "./StoreWrapper";

// Session Storage
const storage = new MMKV({
  id: `session-storage`
});

let userStorage = null;

const secureStorage = () => {
  if (!userStorage) {
    const store = StoreWrapper.getStore();
    const userId = store.getState().session.id;

    userStorage = new MMKV({
      id: `user-${userId}-storage`
    });
  }

  return userStorage;
}

export const StoreKeys = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refresh_token'
}

export const SessionStorage = storage;
export const SecureStorage = secureStorage();

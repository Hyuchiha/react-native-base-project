let _store;

function setStore(store) {
  _store = store;
}

function getStore() {
  return _store;
}

export default {
  setStore,
  getStore
};

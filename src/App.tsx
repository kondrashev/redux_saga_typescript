import React from 'react';
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer  from "./redux/rootReducer";
import ListItems from './components/ListItems'
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));
saga.run(sagaWatcher);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ListItems/>
    </Provider>
  );
}
export default App;

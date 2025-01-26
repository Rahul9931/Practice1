import React from 'react';
import { Provider } from 'react-redux';
import store from './src/pagination/redux/store';
import PaginatedList from './src/pagination/PaginatedList';

const App = () => {
  return (
    <Provider store={store}>
      <PaginatedList />
    </Provider>
  );
};

export default App;

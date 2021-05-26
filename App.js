import React from 'react';
import {Provider} from './src/provider/createAppContext';
import TodosScreen from './src/screen/TodosScreen';

const App = () => {
  return (
    <Provider>
      <TodosScreen />
    </Provider>
  );
};

export default App;

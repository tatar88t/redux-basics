import './App.css';

import {Provider} from 'react-redux';
import {store} from './store';

import {Header} from './components/Header';
import {Main} from './components/Main'
import {Counter} from './components/Counter'
import {Field} from './components/Field'

function App() {
  return (
    <Provider store={store}>
      <div>
          <Header />
          <Main />
          <Counter />
          <Field />
      </div>
    </Provider>
  );
}

export default App;

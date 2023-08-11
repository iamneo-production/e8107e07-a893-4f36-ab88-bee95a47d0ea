import logo from './logo.svg';
import './App.css';
import store from './components/Store/store';
import JokeGenerator from './components/JokeGenerator/JokeGenerator';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JokeGenerator/>
      </div>
    </Provider>
  );
}

export default App;

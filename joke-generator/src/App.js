import logo from './logo.svg';
import './App.css';
import store from './components/Store/store';
import JokeGenerator from './components/JokeGenerator/JokeGenerator';

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

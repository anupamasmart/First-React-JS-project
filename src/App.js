import logo from './logo.svg';
import './App.css';

const App =() => {
  const name = 'Anupama';
  const isNameShowing = true;
  return (
    <div className="App">
   <h1>Hello {isNameShowing ? name :'someone'}</h1>
    </div>
  );
}

export default App;

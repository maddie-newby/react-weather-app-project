import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter a city</h1>
        <Weather city="New York"/>
      </header>
    </div>
  );
};

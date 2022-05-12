import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-title'>
          <h1> Bookish </h1>
        </div>
        <div className='App-header-paragraph'>
          <p>“One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.” – Carl Sagan</p>
        </div>
      </header>

      <div className="App-main">
        <BookList />
      </div>

    </div>
  );
}

export default App;

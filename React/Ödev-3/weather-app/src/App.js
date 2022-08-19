import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { SearchProvider } from './context/SearchContext';
import { ResultProvider } from './context/ResultContext';


function App() {

  return (
    <div className="App">
      <SearchProvider>
        <ResultProvider>
          <Header />
          <Body />
        </ResultProvider>
      </SearchProvider>



    </div>
  );
}

export default App;

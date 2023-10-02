
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Search from './Search/Search'
function App() {
  return (
    <div className="App">
      <h1>Search Functionality in react js</h1>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Search />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Compress from './pages/Compress/Compress';
import Doc from './pages/ToDoc/Doc';
import Ppt from './pages/ToPPT/Ppt';
import Excel from './pages/ToXL/Excel';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path="/compress">
          <Compress/>
        </Route>
        <Route exact path="/convertPdfToDoc">
          <Doc/>
        </Route>
        <Route exact path="/convertPdfToPPT">
          <Ppt/>
        </Route>
        <Route exact path="/convertPdfToExcel">
          <Excel/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

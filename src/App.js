import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Nav/Navbar';
import Home from './components/Pages/Home';
import Conatct from './components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/#" component={Home} />
        </Switch>
      </Router>
      <Conatct />
    </div>
  );
}
export default App;





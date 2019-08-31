import React from 'react';
import './App.scss';
import Validation from './containers/validation/validation';
import { BrowserRouter as Router, Route } from 'react-router-dom'




class App extends React.Component {




  render() {
    return (

      <div>
        <Router>
          <Route component={Validation} />
        </Router>
      </div>

    );
  }
}
export default App;
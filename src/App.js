import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <Link to="/articles">
          <h1>Articles</h1>
        </Link>
        <Link to="/books">
          <h1>Books</h1>
        </Link>
        <Link to="/people">
          <h1>People</h1>
        </Link>
      </div>
    );
  }
}

export default App;

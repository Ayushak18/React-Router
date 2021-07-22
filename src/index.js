import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Book from './components/books';
import Support from './components/support';
import Articles from './components/articles';
import Article from './components/article';
import People from './components/poeple';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="flex">
        <Sidebar />

        <Route path="/" exact>
          <App />
        </Route>

        <Route path="/articles/:slug" component={Article}></Route>

        <Route path="/articles" exact>
          <Articles />
        </Route>

        <Route path="/books">
          <Book />
        </Route>

        <Route path="/support">
          <Support />
        </Route>

        <Route path="/people">
          <People />
        </Route>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

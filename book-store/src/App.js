
import './App.css';
import React from 'react';
import Header from './components/Header';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';
import AddBook from '../src/components/AddBook';
import Books from '../src/components/Book/Books';
import BookDetail from '../src/components/Book/BookDetail';

function App() {
  return<React.Fragment>
    <header>
      <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/books/:id" element={<BookDetail/>} exact/>
        </Routes>
      </main>
      </React.Fragment>;
}

export default App;

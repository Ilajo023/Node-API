import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './UI/Nav';
import CreateListForm from './components/CreateListForm.js';
import Lists from './components/Lists';
import EditList from './components/EditList';
import Shops from './components/Shops';
import Categories from './components/Categories';
import ListDetails from './components/ListDetails';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <header>
          <h1>Shopping plan</h1>
        </header>
        <br />
        <Route path="/lists" exact component={Lists} />
        <Route path="/shops" exact component={Shops} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/list/:id/edit" component={EditList} />
        <Route path="/" exact component={CreateListForm} />
        <Route path="/list/:id" exact component={ListDetails}></Route>
      </div>
    </Router>
  );
}

export default App;

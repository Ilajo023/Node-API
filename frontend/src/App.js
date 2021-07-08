import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './UI/Nav';
import CreateListForm from './components/CreateListForm.js';
import Lists from './components/Lists';
import EditList from './components/EditList';
import List from './components/List.js';
import NewShop from './components/NewShop';
import Shop from './components/Shop';
import Shops from './components/Shops';
import Categories from './components/Categories';
import CreateList from './components/CreateList';

function App() {
	return (
		<Router>
			<div className="container">
				<Nav />
				<br />
				<Route path="/lists" exact component={Lists} />
				<Route path="/shops" exact component={Shops} />
				<Route path="/categories" exact component={Categories} />
				<header>
					<h1>Shopping plan</h1>
				</header>
				<Route path="/" exact component={CreateListForm} />
			</div>
		</Router>
	);
}

export default App;

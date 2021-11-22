import React from 'react';
import PropTypes from 'prop-types';

import { cmfConnect } from '@talend/react-cmf';
import { Menubar } from 'primereact/menubar';
import { BrowserRouter as Router, Route as BaseRoute, Link } from 'react-router-dom';
import { HELLO_REDUX_TYPE } from '../../constants';
import About from '../About';

const Route = cmfConnect()(BaseRoute);

const Index = () => <h2>Home</h2>;
const Users = () => <h2>Users</h2>;

function App(props) {
	const items = [
		{
			label: 'Pure function call',
			icon: 'pi pi-fw pi-file',
			command: () => {
				alert(' pure js ');
			},
		},
		{
			label: 'Load todos using sagas',
			icon: 'pi pi-fw pi-pencil',
			command: () => {
				props.dispatch({
					type: HELLO_REDUX_TYPE,
				});
			},
		},
	];
	return (
		<div>
			<h1>Hello world</h1>
			<div>
				<p>The following menu works as it it without settings</p>
				<Menubar model={items} />
			</div>
			<div>
				<h2>The following use the react-router v4</h2>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about/">About</Link>
								</li>
								<li>
									<Link to="/users/">Users</Link>
								</li>
							</ul>
						</nav>

						<Route path="/" exact component={Index} />
						<Route path="/about/" component={About} saga={'About#default'} />
						<Route path="/users/" component={Users} />
					</div>
				</Router>
				<h2>TODOS loaded by saga:</h2>
				<ul>
					{props.todos.map(todo => (
						<li>{todo.get('title')}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

App.propTypes = {
	todos: PropTypes.array,
};

export default cmfConnect({
	withDispatch: true,
	mapStateToProps: state => ({
		todos: state.cmf.collections.get('todos', []),
	}),
})(App);

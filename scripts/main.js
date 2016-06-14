var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');
/* 
	App
*/

var App = React.createClass({

	render : function(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory />
			</div>

		)
	}
})

/*
	Header
*/
var Header = React.createClass({
	render : function (){
		return(
			<header className="top">
				<h1>Cath 
				<span className="ofThe"> 
					<span createClass="of"> of </span>
					<span createClass="the"> the </span>
				</span> 
				Day</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
})


/*
	Order
*/
var Order = React.createClass({
	render : function (){
		return(
			<p>Order</p>
		)
	}
})


/*
	Inventory
*/
var Inventory = React.createClass({
	render : function (){
		return(
			<p>Inventory</p>
		)
	}
})


/*
	StorePicker
	This will let us make <StorePicker /> this is a component but only the definition of said component, you can call this same component multiple times but passing diff data, like if you have multiple store you wish to pick from 
 */

 var StorePicker = React.createClass({
		
 		render : function(){
			var name = "lloyd";
			//normal comments
			return (
				<form className="store-selector">
					{/*creating the store - jsx comments*/}
					<h2>Please Enter a Store {/*name*/}</h2>
					<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
					<input type="Submit"/>
				</form>
			)
 		}
 });

/*
	Not Found
*/
var NotFound = React.createClass({
	render : function() {
	return <h1>Not Found</h1>
	}
});
/*
	Routes

*/
var routes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
	)

ReactDOM.render(routes, document.querySelector('#main'));
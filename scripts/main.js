var React = require('react');
var ReactDOM = require('react-dom');
/*
	StorePicker
	This will let us make <StorePicker /> this is a component but only the definition of said component, you can call this same component multiple times but passing diff data, like if you have multiple store you wish to pick from 
 */

 var StorePicker = React.createClass({
		
 		render : function(){
			var name = "wes";
			return (
				<form className="store-selector">
					{/*creating the store jsx comments*/}
					<h2>Please Enter a Store {name}</h2>
					<input type="text" ref="storeId" required />
					<input type="Submit"/>
				</form>
			)
 		}
 });



ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
var React = require('react');
var ReactDOM = require('react-dom');
var Watch = require('./watch.jsx');


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Watch />, document.getElementById('main'));
});

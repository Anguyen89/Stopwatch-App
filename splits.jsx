var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function(){
    return (
    <ul>
      {this.props.splits.map(function(split){
        return <li>{split}</li>;
      })
    }
    </ul>
  );
  }

});

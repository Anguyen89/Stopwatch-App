var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({

  render: function(){
    var button1text, button2text;
    if (this.props.running){
      button1text = "Split";
      button2text = "Stop";
    }else{
      button1text = "Start";
      button2text = "Reset";
    }
    return (
    <div>
      <button onClick={this.props.button1cb}>{button1text}</button>
      <button onClick={this.props.button2cb}>{button2text}</button>
    </div>
    );
  }
});

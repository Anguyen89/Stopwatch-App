var React = require('react');
var ReactDOM = require('react-dom');
var Display = require('./display.jsx');
var Buttons = require('./buttons.jsx');
var Splits = require('./splits.jsx');

module.exports = React.createClass({

  getInitialState: function(){
    return { elapsed: 0, running: false, splits: []};
  },

  tick: function(){
    if (this.state.running){
      this.setState({ elapsed: this.state.elapsed + 1});
    }
  },

  button1click: function(){
    if (this.state.running){
      var splits = this.state.splits;
      this.state.splits.push(this.state.elapsed);
      this.setState({splits: splits});
    }else{
      this.setState({running: true});
    }
  },

  button2click: function(){
    if (this.state.running){
      this.setState({running: false});
    }else{
      this.setState({elapsed: 0, splits: []});
    }
  },

  componentDidMount: function(){
    setInterval(this.tick, 1000);
  },

  render: function(){
    return (
    <div>
      <Display elapsed={this.state.elapsed} />
      <Buttons button1cb={this.button1click} button2cb={this.button2click} running={this.state.running}/>
      <Splits splits={this.state.splits} />
    </div>
    );
  }
});

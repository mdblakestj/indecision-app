
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'




IndecisionApp.defaultProps = {
  options: []
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

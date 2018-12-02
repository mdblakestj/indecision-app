import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  )
}
const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)
IndecisionApp.defaultProps = {
  options: []
}
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

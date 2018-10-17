'use strict';

console.log("hello react");

var app = {
  title: 'Indecision App',
  subtitle: 'What Should I do? I cannot decide',
  options: []

};
var onMakeDecision = function onMakeDecision() {
  var rnum = Math.floor(Math.random() * app.options.length);
  var option = app.options[rnum];
  alert(option);
};
var numbers = [55, 100, 1000];

var renderIt = function renderIt() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? "Here are your options:" : "No options",
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What Should i do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
var removeAll = function removeAll(e) {
  app.options = [];
  renderIt();
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIt();
  }
};
// const template = (
//   <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   {app.options.length > 0 ? "Here are your options:": "No options"}
//   <p>{app.options.length}</p>
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//     <li>Item three</li>
//   </ol>
//   <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"/>
//       <button>Add Option</button>
//   </form>
//   </div>
// )

var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
renderIt();

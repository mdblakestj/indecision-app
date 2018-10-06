'use strict';

console.log("hello react");

var app = {
  title: 'Indecision App',
  subtitle: 'Here it is'

};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    ),
    React.createElement(
      'li',
      null,
      'Item three'
    )
  )
);

var user = {
  name: 'Dan',
  age: 20,
  location: 'Boston'
};

var userName = 'Mike';
var userAge = 30;
var userLocation = "Boston";

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Locaton: ',
    userLocation
  )
);

//create template
//render template
//template 2 variable root div h1 tag Name ptag age: age ptag location
//render template 2 instead template 1
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

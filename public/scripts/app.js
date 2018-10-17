"use strict";

var appRoot = document.getElementById('app');

var options = {
  message: "Show details",
  messageTwo: "Hide details",
  details: ""
};

var counter = true;
// const toggle = () => {
//   if (counter){
//     return <button onClick={toggle}> Hide Details </button>
//     <p>Here are the details</p>
//   } else {
//     return <button onClick={toggle}>Show Details</button>
//   }
// }

var toggle = function toggle() {
  if (counter) {
    options.message = "Hide Details";
    options.details = "Here are the deets";
    counter = false;
    renderIt();
  } else {
    options.message = "Show details";
    counter = true;
    options.details = "";
    renderIt();
  }
};

var renderIt = function renderIt() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggle },
      options.message
    ),
    React.createElement(
      "h1",
      null,
      options.details
    )
  );
  ReactDOM.render(template, appRoot);
};

renderIt();

//show details
//hide details

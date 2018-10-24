'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
  _inherits(Visibility, _React$Component);

  function Visibility(props) {
    _classCallCheck(this, Visibility);

    var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

    _this.toggleVis = _this.toggleVis.bind(_this);
    _this.state = {
      toggle: true
    };
    return _this;
  }

  _createClass(Visibility, [{
    key: 'toggleVis',
    value: function toggleVis() {
      this.setState(function (prevState) {
        return {
          toggle: !prevState.toggle
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.toggleVis },
          this.state.toggle ? 'Show Details' : 'Hide details'
        ),
        React.createElement(
          'p',
          null,
          !this.state.toggle ? 'Details' : ''
        )
      );
    }
  }]);

  return Visibility;
}(React.Component);

//methods render, constructor, togglevis
//visibility - false

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

// const appRoot = document.getElementById('app')
//
//
// const options = {
//   message: "Show details",
//   messageTwo: "Hide details",
//   details: ""
// }
//
//
// let counter = true;
// // const toggle = () => {
// //   if (counter){
// //     return <button onClick={toggle}> Hide Details </button>
// //     <p>Here are the details</p>
// //   } else {
// //     return <button onClick={toggle}>Show Details</button>
// //   }
// // }
//
// let toggle = () => {
//   if (counter) {
//     options.message = "Hide Details"
//     options.details = "Here are the deets"
//     counter = false;
//     renderIt();
//   } else {
//     options.message = "Show details"
//     counter = true;
//     options.details = ""
//     renderIt();
//   }
// }
//
// const renderIt = () => {
//   const template = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggle}>{options.message}</button>
//     <h1>{options.details}</h1>
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }
//
// renderIt()
//
//
// //show details
// //hide details

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.state = {
      count: props.count
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('count');
        var count = parseInt(json, 10);
        if (count) {
          this.setState(function () {
            return { count: count };
          });
        }
      } catch (e) {}
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        var jsonOptions = JSON.stringify(this.state.count);
        localStorage.setItem('count', jsonOptions);
      }
    }
  }, {
    key: 'addOne',
    value: function addOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState(function () {
        return {
          count: 0
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
          'Count:',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.reset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);
/// handle addOne, handleMinusOne, reset
//.use console.log
//wire up onClick and bind

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(Counter, { count: -10 }), document.getElementById('app'));

// console.log("hello react")
//
// const app = {
//   title: 'Indecision App',
//   subtitle: 'subtitle',
//   options: ['one', 'two']
//
// }
// const template = (
//   <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   {app.options.length > 0 ? "Here are your options:": "No options"}
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//     <li>Item three</li>
//   </ol>
//   </div>
// )
//
// const appRoot = document.getElementById('app')
//
// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
//
// // const templateTwo = (
// //    <div>
// //     <h1>Count: {count}</h1>
// //     <button onClick={addOne}>+1</button>
// //     <button onClick={minusOne}>-1</button>
// //     <button onClick={reset}>Reset</button>
// //    </div>
// // );
//
// //Make a button with the text minus one
// //Make a button that resets log reset
//
// // console.log(templateTwo);
// const appRoot = document.getElementById('app')
// // ReactDOM.render(templateTwo, appRoot)
//
// const renderCounterApp = () => {
//   const templateTwo = (
//      <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//      </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
//
// }
// renderCounterApp();

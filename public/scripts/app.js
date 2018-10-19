'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'greetings',
    value: function greetings() {
      return "Hey!";
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' year(s) old';
    }
  }]);

  return Person;
}();

var me = new Person('Dan Schwartz', 27);

console.log(me.getDescription());
console.log('Hat');

//add a second optional item age with default zero
//getDescription return string - Dan Schwartz is Age year(s) old.

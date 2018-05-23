'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      personal: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onCheckoutClick',
    value: function onCheckoutClick() {
      this.setState({
        personal: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onPersonal = this.state.personal;
      var checkoutButton = onPersonal ? React.createElement(Personal, null) : 'Checkout';

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Tea World'
        ),
        React.createElement(
          'div',
          { className: 'checkout', onPersonal: onPersonal, onClick: this.onCheckoutClick.bind(this) },
          checkoutButton
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Personal = function (_React$Component2) {
  _inherits(Personal, _React$Component2);

  function Personal(props) {
    _classCallCheck(this, Personal);

    var _this2 = _possibleConstructorReturn(this, (Personal.__proto__ || Object.getPrototypeOf(Personal)).call(this, props));

    _this2.state = {
      done: false
    };
    return _this2;
  }

  _createClass(Personal, [{
    key: 'onPersonalNextClick',
    value: function onPersonalNextClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onContact = this.state.done;
      var nextButton = onContact ? React.createElement(Contact, null) : 'Next';

      return React.createElement(
        'div',
        { className: 'personal' },
        React.createElement(
          'div',
          { className: 'name' },
          React.createElement(
            'div',
            { id: 'n' },
            'Name'
          ),
          React.createElement('textarea', { id: 'name', cols: '30' })
        ),
        React.createElement(
          'div',
          { className: 'email' },
          React.createElement(
            'div',
            { id: 'e' },
            'Email'
          ),
          React.createElement('textarea', { id: 'email', cols: '30' })
        ),
        React.createElement(
          'div',
          { className: 'password' },
          React.createElement(
            'div',
            { id: 'pw' },
            'Password'
          ),
          React.createElement('textarea', { id: 'password', cols: '30' })
        ),
        React.createElement(
          'div',
          { className: 'next1', onClick: this.onPersonalNextClick.bind(this) },
          nextButton
        )
      );
    }
  }]);

  return Personal;
}(React.Component);

var Contact = function (_React$Component3) {
  _inherits(Contact, _React$Component3);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this3 = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _this3.state = {
      done: false
    };
    return _this3;
  }

  _createClass(Contact, [{
    key: 'onContactNextClick',
    value: function onContactNextClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'contact' },
        React.createElement(
          'div',
          { className: 'address' },
          React.createElement(
            'div',
            { id: 'add' },
            'Address'
          ),
          React.createElement('textarea', { id: 'address', cols: '30' })
        ),
        React.createElement(
          'div',
          { className: 'phone' },
          React.createElement(
            'div',
            { id: 'pn' },
            'Phone Number'
          ),
          React.createElement('textarea', { id: 'phone', cols: '30' })
        )
      );
    }
  }]);

  return Contact;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZXJzb25hbCIsInNldFN0YXRlIiwib25QZXJzb25hbCIsImNoZWNrb3V0QnV0dG9uIiwib25DaGVja291dENsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVyc29uYWwiLCJkb25lIiwib25Db250YWN0IiwibmV4dEJ1dHRvbiIsIm9uUGVyc29uYWxOZXh0Q2xpY2siLCJDb250YWN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsS0FBYjtBQUhrQjtBQU1sQjs7OztzQ0FFaUI7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELGtCQUFVO0FBREUsT0FBZDtBQUdBOzs7NkJBRVE7QUFDUixVQUFNRSxhQUFhLEtBQUtILEtBQUwsQ0FBV0MsUUFBOUI7QUFDQSxVQUFNRyxpQkFBaUJELGFBQWMsb0JBQUMsUUFBRCxPQUFkLEdBRXJCLFVBRkY7O0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsWUFBWUEsVUFBdEMsRUFBa0QsU0FBUyxLQUFLRSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUEzRDtBQUE2RkY7QUFBN0Y7QUFGRixPQURGO0FBTUE7Ozs7RUE1QmVHLE1BQU1DLFM7O0lBK0JsQkMsUTs7O0FBQ0osb0JBQVlWLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSEFDWkEsS0FEWTs7QUFHbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hVLFlBQU07QUFESyxLQUFiO0FBSGtCO0FBTWxCOzs7OzBDQUVxQjtBQUNyQixXQUFLUixRQUFMLENBQWM7QUFDWlEsY0FBTTtBQURNLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1IsVUFBTUMsWUFBWSxLQUFLWCxLQUFMLENBQVdVLElBQTdCO0FBQ0EsVUFBTUUsYUFBYUQsWUFBYSxvQkFBQyxPQUFELE9BQWIsR0FFakIsTUFGRjs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNHO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsR0FBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsTUFBYixFQUFvQixNQUFLLElBQXpCO0FBRkYsU0FESDtBQUtHO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsR0FBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsT0FBYixFQUFxQixNQUFLLElBQTFCO0FBRkYsU0FMSDtBQVNHO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsSUFBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsVUFBYixFQUF3QixNQUFLLElBQTdCO0FBRkYsU0FUSDtBQWFHO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZixFQUF1QixTQUFTLEtBQUtFLG1CQUFMLENBQXlCUCxJQUF6QixDQUE4QixJQUE5QixDQUFoQztBQUFzRU07QUFBdEU7QUFiSCxPQURGO0FBaUJBOzs7O0VBdkNvQkwsTUFBTUMsUzs7SUEwQ3ZCTSxPOzs7QUFDSixtQkFBWWYsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNaQSxLQURZOztBQUdsQixXQUFLQyxLQUFMLEdBQWE7QUFDWFUsWUFBTTtBQURLLEtBQWI7QUFIa0I7QUFNbEI7Ozs7eUNBRW9CO0FBQ3BCLFdBQUtSLFFBQUwsQ0FBYztBQUNaUSxjQUFNO0FBRE0sT0FBZDtBQUdBOzs7NkJBRVE7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsS0FBUjtBQUFBO0FBQUEsV0FERjtBQUVHLDRDQUFVLElBQUcsU0FBYixFQUF1QixNQUFLLElBQTVCO0FBRkgsU0FERDtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsSUFBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsT0FBYixFQUFxQixNQUFLLElBQTFCO0FBRkY7QUFMRixPQURGO0FBWUE7Ozs7RUE1Qm1CSCxNQUFNQyxTOztBQW1DNUJPLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBwZXJzb25hbDogZmFsc2UsXG4gIFx0fVxuICB9XG5cbiAgb25DaGVja291dENsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgcGVyc29uYWw6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBvblBlcnNvbmFsID0gdGhpcy5zdGF0ZS5wZXJzb25hbDtcbiAgXHRjb25zdCBjaGVja291dEJ1dHRvbiA9IG9uUGVyc29uYWwgPyAoPFBlcnNvbmFsIC8+XG4gIFx0KSA6IChcbiAgXHQgICdDaGVja291dCdcbiAgXHQpO1xuXG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXY+XG4gIFx0ICAgIDxoMT5UZWEgV29ybGQ8L2gxPlxuICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCIgb25QZXJzb25hbD17b25QZXJzb25hbH0gb25DbGljaz17dGhpcy5vbkNoZWNrb3V0Q2xpY2suYmluZCh0aGlzKX0+e2NoZWNrb3V0QnV0dG9ufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gIFx0KTtcbiAgfVxufVxuXG5jbGFzcyBQZXJzb25hbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGRvbmU6IGZhbHNlXG4gIFx0fVxuICB9XG5cbiAgb25QZXJzb25hbE5leHRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBvbkNvbnRhY3QgPSB0aGlzLnN0YXRlLmRvbmU7XG4gIFx0Y29uc3QgbmV4dEJ1dHRvbiA9IG9uQ29udGFjdCA/ICg8Q29udGFjdCAvPlxuICBcdCkgOiAoXG4gIFx0ICAnTmV4dCdcbiAgXHQpO1xuXG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWxcIj5cbiAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJuXCI+TmFtZTwvZGl2PlxuICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwibmFtZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICBcdCAgPC9kaXY+XG4gIFx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICBcdCAgXHQgICAgPGRpdiBpZD1cImVcIj5FbWFpbDwvZGl2PlxuICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwiZW1haWxcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgXHQgIDwvZGl2PlxuICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRcIj5cbiAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJwd1wiPlBhc3N3b3JkPC9kaXY+XG4gIFx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJwYXNzd29yZFwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICBcdCAgPC9kaXY+XG4gIFx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJuZXh0MVwiIG9uQ2xpY2s9e3RoaXMub25QZXJzb25hbE5leHRDbGljay5iaW5kKHRoaXMpfT57bmV4dEJ1dHRvbn08L2Rpdj5cbiAgXHQgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGRvbmU6IGZhbHNlXG4gIFx0fVxuICB9XG5cbiAgb25Db250YWN0TmV4dENsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZG9uZTogdHJ1ZVxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgXHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gIFx0ICBcdCAgPGRpdiBpZD1cImFkZFwiPkFkZHJlc3M8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgIFx0PC9kaXY+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmVcIj5cbiAgXHQgICAgICA8ZGl2IGlkPVwicG5cIj5QaG9uZSBOdW1iZXI8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJwaG9uZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KTtcbiAgfVxufVxuXG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5cbiJdfQ==
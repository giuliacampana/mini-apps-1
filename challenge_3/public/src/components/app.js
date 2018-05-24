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
          'Shopping Cart'
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
      sendPostRequest({ name: 'giulia' });
    }
  }, {
    key: 'render',
    value: function render() {
      var onContact = this.state.done;
      var contactNextButton = onContact ? React.createElement(Contact, null) : 'Next';

      return React.createElement(
        'div',
        { className: 'personal' },
        React.createElement(
          'div',
          { id: 'create' },
          'Create an account!'
        ),
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
          contactNextButton
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
      var onPayment = this.state.done;
      var paymentNextButton = onPayment ? React.createElement(Payment, null) : 'Next';

      return React.createElement(
        'div',
        { className: 'contact' },
        React.createElement(
          'div',
          { className: 'address' },
          React.createElement(
            'div',
            { id: 'add1' },
            'Address Line 1'
          ),
          React.createElement('textarea', { id: 'address1', cols: '30' }),
          React.createElement(
            'div',
            { id: 'add2' },
            'Address Line 2'
          ),
          React.createElement('textarea', { id: 'address2', cols: '30' }),
          React.createElement(
            'div',
            { id: 'c' },
            'City'
          ),
          React.createElement('textarea', { id: 'city', cols: '30' }),
          React.createElement(
            'div',
            { id: 'st' },
            'State'
          ),
          React.createElement('textarea', { id: 'state', cols: '30' }),
          React.createElement(
            'div',
            { id: 'zip' },
            'Zip Code'
          ),
          React.createElement('textarea', { id: 'zipcode', cols: '30' })
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
        ),
        React.createElement(
          'div',
          { className: 'next2', onClick: this.onContactNextClick.bind(this) },
          paymentNextButton
        )
      );
    }
  }]);

  return Contact;
}(React.Component);

var Payment = function (_React$Component4) {
  _inherits(Payment, _React$Component4);

  function Payment(props) {
    _classCallCheck(this, Payment);

    var _this4 = _possibleConstructorReturn(this, (Payment.__proto__ || Object.getPrototypeOf(Payment)).call(this, props));

    _this4.state = {
      done: false
    };
    return _this4;
  }

  _createClass(Payment, [{
    key: 'onPaymentNextClick',
    value: function onPaymentNextClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onReview = this.state.done;
      var reviewNextButton = onReview ? React.createElement(Review, null) : 'Next';

      return React.createElement(
        'div',
        { className: 'payment' },
        React.createElement(
          'div',
          { id: 'num' },
          'Credit Card Number'
        ),
        React.createElement('textarea', { id: 'number', cols: '30' }),
        React.createElement(
          'div',
          { id: 'd' },
          'Expiry Date'
        ),
        React.createElement('textarea', { id: 'date', cols: '30' }),
        React.createElement(
          'div',
          { id: 'cvvnum' },
          'CVV'
        ),
        React.createElement('textarea', { id: 'cvv', cols: '30' }),
        React.createElement(
          'div',
          { id: 'zc' },
          'Billing Zip Code'
        ),
        React.createElement('textarea', { id: 'billing', cols: '30' }),
        React.createElement(
          'div',
          { className: 'next3', onClick: this.onPaymentNextClick.bind(this) },
          reviewNextButton
        )
      );
    }
  }]);

  return Payment;
}(React.Component);

var Review = function (_React$Component5) {
  _inherits(Review, _React$Component5);

  function Review(props) {
    _classCallCheck(this, Review);

    var _this5 = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));

    _this5.state = {
      done: false
    };
    return _this5;
  }

  _createClass(Review, [{
    key: 'onPurchaseClick',
    value: function onPurchaseClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onPurchase = this.state.done;
      var purchaseButton = onPurchase ? React.createElement(App, null) : 'Purchase';

      return React.createElement(
        'div',
        { className: 'details' },
        React.createElement(
          'div',
          null,
          'Please review your order:'
        ),
        React.createElement(
          'div',
          { className: 'purchase', onClick: this.onPurchaseClick.bind(this) },
          purchaseButton
        )
      );
    }
  }]);

  return Review;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZXJzb25hbCIsInNldFN0YXRlIiwib25QZXJzb25hbCIsImNoZWNrb3V0QnV0dG9uIiwib25DaGVja291dENsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVyc29uYWwiLCJkb25lIiwic2VuZFBvc3RSZXF1ZXN0IiwibmFtZSIsIm9uQ29udGFjdCIsImNvbnRhY3ROZXh0QnV0dG9uIiwib25QZXJzb25hbE5leHRDbGljayIsIkNvbnRhY3QiLCJvblBheW1lbnQiLCJwYXltZW50TmV4dEJ1dHRvbiIsIm9uQ29udGFjdE5leHRDbGljayIsIlBheW1lbnQiLCJvblJldmlldyIsInJldmlld05leHRCdXR0b24iLCJvblBheW1lbnROZXh0Q2xpY2siLCJSZXZpZXciLCJvblB1cmNoYXNlIiwicHVyY2hhc2VCdXR0b24iLCJvblB1cmNoYXNlQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUdsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLQUFiO0FBSGtCO0FBTWxCOzs7O3NDQUVpQjtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFDWkQsa0JBQVU7QUFERSxPQUFkO0FBR0E7Ozs2QkFFUTtBQUNSLFVBQU1FLGFBQWEsS0FBS0gsS0FBTCxDQUFXQyxRQUE5QjtBQUNBLFVBQU1HLGlCQUFpQkQsYUFBYyxvQkFBQyxRQUFELE9BQWQsR0FFckIsVUFGRjs7QUFLQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZixFQUEwQixZ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QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWYsRUFBdUIsU0FBUyxLQUFLRSxrQkFBTCxDQUF3QmpCLElBQXhCLENBQTZCLElBQTdCLENBQWhDO0FBQXFFZ0I7QUFBckU7QUFURixPQURGO0FBYUE7Ozs7RUFuQ21CZixNQUFNQyxTOztJQXVDdEJnQixNOzs7QUFDSixrQkFBWXpCLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWkEsS0FEWTs7QUFHbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hVLFlBQU07QUFESyxLQUFiO0FBSGtCO0FBTWxCOzs7O3NDQUVpQjtBQUNqQixXQUFLUixRQUFMLENBQWM7QUFDWlEsY0FBTTtBQURNLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1IsVUFBTWUsYUFBYSxLQUFLekIsS0FBTCxDQUFXVSxJQUE5QjtBQUNBLFVBQU1nQixpQkFBaUJELGFBQWMsb0JBQUMsR0FBRCxPQUFkLEdBRXJCLFVBRkY7O0FBS0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBUyxLQUFLRSxlQUFMLENBQXFCckIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBbkM7QUFBcUVvQjtBQUFyRTtBQUZGLE9BREY7QUFNQTs7OztFQTVCa0JuQixNQUFNQyxTOztBQStCM0JvQixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgcGVyc29uYWw6IGZhbHNlLFxuICBcdH1cbiAgfVxuXG4gIG9uQ2hlY2tvdXRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBlcnNvbmFsOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3Qgb25QZXJzb25hbCA9IHRoaXMuc3RhdGUucGVyc29uYWw7XG4gIFx0Y29uc3QgY2hlY2tvdXRCdXR0b24gPSBvblBlcnNvbmFsID8gKDxQZXJzb25hbCAvPlxuICBcdCkgOiAoXG4gIFx0ICAnQ2hlY2tvdXQnXG4gIFx0KTtcblxuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8aDE+U2hvcHBpbmcgQ2FydDwvaDE+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIiBvblBlcnNvbmFsPXtvblBlcnNvbmFsfSBvbkNsaWNrPXt0aGlzLm9uQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpfT57Y2hlY2tvdXRCdXR0b259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgXHQpO1xuICB9XG59XG5cbmNsYXNzIFBlcnNvbmFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvblBlcnNvbmFsTmV4dENsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZG9uZTogdHJ1ZVxuICBcdH0pO1xuICBcdHNlbmRQb3N0UmVxdWVzdCh7bmFtZTogJ2dpdWxpYSd9KTtcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3Qgb25Db250YWN0ID0gdGhpcy5zdGF0ZS5kb25lO1xuICBcdGNvbnN0IGNvbnRhY3ROZXh0QnV0dG9uID0gb25Db250YWN0ID8gKDxDb250YWN0IC8+XG4gIFx0KSA6IChcbiAgXHQgICdOZXh0J1xuICBcdCk7XG5cbiAgXHRyZXR1cm4gKFxuICBcdCAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb25hbFwiPlxuICBcdCAgICAgIDxkaXYgaWQ9XCJjcmVhdGVcIj5DcmVhdGUgYW4gYWNjb3VudCE8L2Rpdj5cbiAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJuXCI+TmFtZTwvZGl2PlxuICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwibmFtZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICBcdCAgPC9kaXY+XG4gIFx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICBcdCAgXHQgICAgPGRpdiBpZD1cImVcIj5FbWFpbDwvZGl2PlxuICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwiZW1haWxcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgXHQgIDwvZGl2PlxuICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRcIj5cbiAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJwd1wiPlBhc3N3b3JkPC9kaXY+XG4gIFx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJwYXNzd29yZFwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICBcdCAgPC9kaXY+XG4gIFx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJuZXh0MVwiIG9uQ2xpY2s9e3RoaXMub25QZXJzb25hbE5leHRDbGljay5iaW5kKHRoaXMpfT57Y29udGFjdE5leHRCdXR0b259PC9kaXY+XG4gIFx0ICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZVxuICBcdH1cbiAgfVxuXG4gIG9uQ29udGFjdE5leHRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBvblBheW1lbnQgPSB0aGlzLnN0YXRlLmRvbmU7XG4gIFx0Y29uc3QgcGF5bWVudE5leHRCdXR0b24gPSBvblBheW1lbnQgPyAoPFBheW1lbnQgLz5cbiAgXHQpIDogKFxuICBcdCAgJ05leHQnXG4gIFx0KTtcblxuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgXHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG4gIFx0ICBcdCAgPGRpdiBpZD1cImFkZDFcIj5BZGRyZXNzIExpbmUgMTwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cImFkZHJlc3MxXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgICA8ZGl2IGlkPVwiYWRkMlwiPkFkZHJlc3MgTGluZSAyPC9kaXY+XG4gIFx0ICAgICAgPHRleHRhcmVhIGlkPVwiYWRkcmVzczJcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgICAgIDxkaXYgaWQ9XCJjXCI+Q2l0eTwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cImNpdHlcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgICAgIDxkaXYgaWQ9XCJzdFwiPlN0YXRlPC9kaXY+XG4gIFx0ICAgICAgPHRleHRhcmVhIGlkPVwic3RhdGVcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgICAgIDxkaXYgaWQ9XCJ6aXBcIj5aaXAgQ29kZTwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cInppcGNvZGVcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgXHQ8L2Rpdj5cbiAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPlxuICBcdCAgICAgIDxkaXYgaWQ9XCJwblwiPlBob25lIE51bWJlcjwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cInBob25lXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgPC9kaXY+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDJcIiBvbkNsaWNrPXt0aGlzLm9uQ29udGFjdE5leHRDbGljay5iaW5kKHRoaXMpfT57cGF5bWVudE5leHRCdXR0b259PC9kaXY+XG4gIFx0ICA8L2Rpdj5cbiAgXHQpO1xuICB9XG59XG5cbmNsYXNzIFBheW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZVxuICBcdH1cbiAgfVxuXG4gIG9uUGF5bWVudE5leHRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBvblJldmlldyA9IHRoaXMuc3RhdGUuZG9uZTtcbiAgXHRjb25zdCByZXZpZXdOZXh0QnV0dG9uID0gb25SZXZpZXcgPyAoPFJldmlldyAvPlxuICBcdCkgOiAoXG4gIFx0ICAnTmV4dCdcbiAgXHQpO1xuXG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudFwiPlxuICBcdCAgICA8ZGl2IGlkPVwibnVtXCI+Q3JlZGl0IENhcmQgTnVtYmVyPC9kaXY+XG4gIFx0ICAgIDx0ZXh0YXJlYSBpZD1cIm51bWJlclwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDxkaXYgaWQ9XCJkXCI+RXhwaXJ5IERhdGU8L2Rpdj5cbiAgXHQgICAgPHRleHRhcmVhIGlkPVwiZGF0ZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDxkaXYgaWQ9XCJjdnZudW1cIj5DVlY8L2Rpdj5cbiAgXHQgICAgPHRleHRhcmVhIGlkPVwiY3Z2XCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgPGRpdiBpZD1cInpjXCI+QmlsbGluZyBaaXAgQ29kZTwvZGl2PlxuICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJiaWxsaW5nXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0M1wiIG9uQ2xpY2s9e3RoaXMub25QYXltZW50TmV4dENsaWNrLmJpbmQodGhpcyl9PntyZXZpZXdOZXh0QnV0dG9ufTwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KTtcbiAgfVxuXG59XG5cbmNsYXNzIFJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGRvbmU6IGZhbHNlXG4gIFx0fVxuICB9XG5cbiAgb25QdXJjaGFzZUNsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZG9uZTogdHJ1ZVxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IG9uUHVyY2hhc2UgPSB0aGlzLnN0YXRlLmRvbmU7XG4gIFx0Y29uc3QgcHVyY2hhc2VCdXR0b24gPSBvblB1cmNoYXNlID8gKDxBcHAgLz5cbiAgXHQpIDogKFxuICBcdCAgJ1B1cmNoYXNlJ1xuICBcdCk7XG5cbiAgXHRyZXR1cm4gKFxuICBcdCAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gIFx0ICAgIDxkaXY+UGxlYXNlIHJldmlldyB5b3VyIG9yZGVyOjwvZGl2PlxuICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmNoYXNlXCIgb25DbGljaz17dGhpcy5vblB1cmNoYXNlQ2xpY2suYmluZCh0aGlzKX0+e3B1cmNoYXNlQnV0dG9ufTwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZXJzb25hbCIsInNldFN0YXRlIiwib25QZXJzb25hbCIsImNoZWNrb3V0QnV0dG9uIiwib25DaGVja291dENsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVyc29uYWwiLCJkb25lIiwib25Db250YWN0IiwiY29udGFjdE5leHRCdXR0b24iLCJvblBlcnNvbmFsTmV4dENsaWNrIiwiQ29udGFjdCIsIm9uUGF5bWVudCIsInBheW1lbnROZXh0QnV0dG9uIiwib25Db250YWN0TmV4dENsaWNrIiwiUGF5bWVudCIsIm9uUmV2aWV3IiwicmV2aWV3TmV4dEJ1dHRvbiIsIm9uUGF5bWVudE5leHRDbGljayIsIlJldmlldyIsIm9uUHVyY2hhc2UiLCJwdXJjaGFzZUJ1dHRvbiIsIm9uUHVyY2hhc2VDbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEtBQWI7QUFIa0I7QUFNbEI7Ozs7c0NBRWlCO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRCxrQkFBVTtBQURFLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1IsVUFBTUUsYUFBYSxLQUFLSCxLQUFMLENBQVdDLFFBQTlCO0FBQ0EsVUFBTUcsaUJBQWlCRCxhQUFjLG9CQUFDLFFBQUQsT0FBZCxHQUVyQixVQUZGOztBQUtBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmLEVBQTBCLFlBQVlBLFVBQXRDLEVBQWtELFNBQVMsS0FBS0UsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBM0Q7QUFBNkZGO0FBQTdGO0FBRkYsT0FERjtBQU1BOzs7O0VBNUJlRyxNQUFNQyxTOztJQStCbEJDLFE7OztBQUNKLG9CQUFZVixLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1pBLEtBRFk7O0FBR2xCLFdBQUtDLEtBQUwsR0FBYTtBQUNYVSxZQUFNO0FBREssS0FBYjtBQUhrQjtBQU1sQjs7OzswQ0FFcUI7QUFDckIsV0FBS1IsUUFBTCxDQUFjO0FBQ1pRLGNBQU07QUFETSxPQUFkO0FBR0E7Ozs2QkFFUTtBQUNSLFVBQU1DLFlBQVksS0FBS1gsS0FBTCxDQUFXVSxJQUE3QjtBQUNBLFVBQU1FLG9CQUFvQkQsWUFBYSxvQkFBQyxPQUFELE9BQWIsR0FFeEIsTUFGRjs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSxZQUFLLElBQUcsUUFBUjtBQUFBO0FBQUEsU0FESjtBQUVHO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsR0FBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsTUFBYixFQUFvQixNQUFLLElBQXpCO0FBRkYsU0FGSDtBQU1HO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsR0FBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsT0FBYixFQUFxQixNQUFLLElBQTFCO0FBRkYsU0FOSDtBQVVHO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLElBQUcsSUFBUjtBQUFBO0FBQUEsV0FERjtBQUVFLDRDQUFVLElBQUcsVUFBYixFQUF3QixNQUFLLElBQTdCO0FBRkYsU0FWSDtBQWNHO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZixFQUF1QixTQUFTLEtBQUtFLG1CQUFMLENBQXlCUCxJQUF6QixDQUE4QixJQUE5QixDQUFoQztBQUFzRU07QUFBdEU7QUFkSCxPQURGO0FBa0JBOzs7O0VBeENvQkwsTUFBTUMsUzs7SUEyQ3ZCTSxPOzs7QUFDSixtQkFBWWYsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNaQSxLQURZOztBQUdsQixXQUFLQyxLQUFMLEdBQWE7QUFDWFUsWUFBTTtBQURLLEtBQWI7QUFIa0I7QUFNbEI7Ozs7eUNBRW9CO0FBQ3BCLFdBQUtSLFFBQUwsQ0FBYztBQUNaUSxjQUFNO0FBRE0sT0FBZDtBQUdBOzs7NkJBRVE7QUFDUixVQUFNSyxZQUFZLEtBQUtmLEtBQUwsQ0FBV1UsSUFBN0I7QUFDQSxVQUFNTSxvQkFBb0JELFlBQWEsb0JBQUMsT0FBRCxPQUFiLEdBRXhCLE1BRkY7O0FBS0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxJQUFHLE1BQVI7QUFBQTtBQUFBLFdBREY7QUFFRyw0Q0FBVSxJQUFHLFVBQWIsRUFBd0IsTUFBSyxJQUE3QixHQUZIO0FBR0c7QUFBQTtBQUFBLGNBQUssSUFBRyxNQUFSO0FBQUE7QUFBQSxXQUhIO0FBSUcsNENBQVUsSUFBRyxVQUFiLEVBQXdCLE1BQUssSUFBN0IsR0FKSDtBQUtHO0FBQUE7QUFBQSxjQUFLLElBQUcsR0FBUjtBQUFBO0FBQUEsV0FMSDtBQU1HLDRDQUFVLElBQUcsTUFBYixFQUFvQixNQUFLLElBQXpCLEdBTkg7QUFPRztBQUFBO0FBQUEsY0FBSyxJQUFHLElBQVI7QUFBQTtBQUFBLFdBUEg7QUFRRyw0Q0FBVSxJQUFHLE9BQWIsRUFBcUIsTUFBSyxJQUExQixHQVJIO0FBU0c7QUFBQTtBQUFBLGNBQUssSUFBRyxLQUFSO0FBQUE7QUFBQSxXQVRIO0FBVUcsNENBQVUsSUFBRyxTQUFiLEVBQXVCLE1BQUssSUFBNUI7QUFWSCxTQUREO0FBYUU7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssSUFBRyxJQUFSO0FBQUE7QUFBQSxXQURGO0FBRUUsNENBQVUsSUFBRyxPQUFiLEVBQXFCLE1BQUssSUFBMUI7QUFGRixTQWJGO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZixFQUF1QixTQUFTLEtBQUtFLGtCQUFMLENBQXdCWCxJQUF4QixDQUE2QixJQUE3QixDQUFoQztBQUFxRVU7QUFBckU7QUFqQkYsT0FERjtBQXFCQTs7OztFQTNDbUJULE1BQU1DLFM7O0lBOEN0QlUsTzs7O0FBQ0osbUJBQVluQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1pBLEtBRFk7O0FBR2xCLFdBQUtDLEtBQUwsR0FBYTtBQUNYVSxZQUFNO0FBREssS0FBYjtBQUhrQjtBQU1sQjs7Ozt5Q0FFb0I7QUFDcEIsV0FBS1IsUUFBTCxDQUFjO0FBQ1pRLGNBQU07QUFETSxPQUFkO0FBR0E7Ozs2QkFFUTtBQUNSLFVBQU1TLFdBQVcsS0FBS25CLEtBQUwsQ0FBV1UsSUFBNUI7QUFDQSxVQUFNVSxtQkFBbUJELFdBQVksb0JBQUMsTUFBRCxPQUFaLEdBRXZCLE1BRkY7O0FBS0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFHLEtBQVI7QUFBQTtBQUFBLFNBREY7QUFFRSwwQ0FBVSxJQUFHLFFBQWIsRUFBc0IsTUFBSyxJQUEzQixHQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssSUFBRyxHQUFSO0FBQUE7QUFBQSxTQUhGO0FBSUUsMENBQVUsSUFBRyxNQUFiLEVBQW9CLE1BQUssSUFBekIsR0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFLLElBQUcsUUFBUjtBQUFBO0FBQUEsU0FMRjtBQU1FLDBDQUFVLElBQUcsS0FBYixFQUFtQixNQUFLLElBQXhCLEdBTkY7QUFPRTtBQUFBO0FBQUEsWUFBSyxJQUFHLElBQVI7QUFBQTtBQUFBLFNBUEY7QUFRRSwwQ0FBVSxJQUFHLFNBQWIsRUFBdUIsTUFBSyxJQUE1QixHQVJGO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmLEVBQXVCLFNBQVMsS0FBS0Usa0JBQUwsQ0FBd0JmLElBQXhCLENBQTZCLElBQTdCLENBQWhDO0FBQXFFYztBQUFyRTtBQVRGLE9BREY7QUFhQTs7OztFQW5DbUJiLE1BQU1DLFM7O0lBdUN0QmMsTTs7O0FBQ0osa0JBQVl2QixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1pBLEtBRFk7O0FBR2xCLFdBQUtDLEtBQUwsR0FBYTtBQUNYVSxZQUFNO0FBREssS0FBYjtBQUhrQjtBQU1sQjs7OztzQ0FFaUI7QUFDakIsV0FBS1IsUUFBTCxDQUFjO0FBQ1pRLGNBQU07QUFETSxPQUFkO0FBR0E7Ozs2QkFFUTtBQUNSLFVBQU1hLGFBQWEsS0FBS3ZCLEtBQUwsQ0FBV1UsSUFBOUI7QUFDQSxVQUFNYyxpQkFBaUJELGFBQWMsb0JBQUMsR0FBRCxPQUFkLEdBRXJCLFVBRkY7O0FBS0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBUyxLQUFLRSxlQUFMLENBQXFCbkIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBbkM7QUFBcUVrQjtBQUFyRTtBQUZGLE9BREY7QUFNQTs7OztFQTVCa0JqQixNQUFNQyxTOztBQWtDM0JrQixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgcGVyc29uYWw6IGZhbHNlLFxuICBcdH1cbiAgfVxuXG4gIG9uQ2hlY2tvdXRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBlcnNvbmFsOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3Qgb25QZXJzb25hbCA9IHRoaXMuc3RhdGUucGVyc29uYWw7XG4gIFx0Y29uc3QgY2hlY2tvdXRCdXR0b24gPSBvblBlcnNvbmFsID8gKDxQZXJzb25hbCAvPlxuICBcdCkgOiAoXG4gIFx0ICAnQ2hlY2tvdXQnXG4gIFx0KTtcblxuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8aDE+U2hvcHBpbmcgQ2FydDwvaDE+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIiBvblBlcnNvbmFsPXtvblBlcnNvbmFsfSBvbkNsaWNrPXt0aGlzLm9uQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpfT57Y2hlY2tvdXRCdXR0b259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgXHQpO1xuICB9XG59XG5cbmNsYXNzIFBlcnNvbmFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvblBlcnNvbmFsTmV4dENsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZG9uZTogdHJ1ZVxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IG9uQ29udGFjdCA9IHRoaXMuc3RhdGUuZG9uZTtcbiAgXHRjb25zdCBjb250YWN0TmV4dEJ1dHRvbiA9IG9uQ29udGFjdCA/ICg8Q29udGFjdCAvPlxuICBcdCkgOiAoXG4gIFx0ICAnTmV4dCdcbiAgXHQpO1xuXG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWxcIj5cbiAgXHQgICAgICA8ZGl2IGlkPVwiY3JlYXRlXCI+Q3JlYXRlIGFuIGFjY291bnQhPC9kaXY+XG4gIFx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gIFx0ICBcdCAgICA8ZGl2IGlkPVwiblwiPk5hbWU8L2Rpdj5cbiAgXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cIm5hbWVcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgXHQgIDwvZGl2PlxuICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJlXCI+RW1haWw8L2Rpdj5cbiAgXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cImVtYWlsXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgIFx0ICA8L2Rpdj5cbiAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkXCI+XG4gIFx0ICBcdCAgICA8ZGl2IGlkPVwicHdcIj5QYXNzd29yZDwvZGl2PlxuICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwicGFzc3dvcmRcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgXHQgIDwvZGl2PlxuICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDFcIiBvbkNsaWNrPXt0aGlzLm9uUGVyc29uYWxOZXh0Q2xpY2suYmluZCh0aGlzKX0+e2NvbnRhY3ROZXh0QnV0dG9ufTwvZGl2PlxuICBcdCAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvbkNvbnRhY3ROZXh0Q2xpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICBkb25lOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3Qgb25QYXltZW50ID0gdGhpcy5zdGF0ZS5kb25lO1xuICBcdGNvbnN0IHBheW1lbnROZXh0QnV0dG9uID0gb25QYXltZW50ID8gKDxQYXltZW50IC8+XG4gIFx0KSA6IChcbiAgXHQgICdOZXh0J1xuICBcdCk7XG5cbiAgXHRyZXR1cm4gKFxuICBcdCAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gIFx0ICBcdDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICBcdCAgXHQgIDxkaXYgaWQ9XCJhZGQxXCI+QWRkcmVzcyBMaW5lIDE8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzMVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgICAgPGRpdiBpZD1cImFkZDJcIj5BZGRyZXNzIExpbmUgMjwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cImFkZHJlc3MyXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgICA8ZGl2IGlkPVwiY1wiPkNpdHk8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJjaXR5XCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgICA8ZGl2IGlkPVwic3RcIj5TdGF0ZTwvZGl2PlxuICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cInN0YXRlXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgICAgICA8ZGl2IGlkPVwiemlwXCI+WmlwIENvZGU8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJ6aXBjb2RlXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cbiAgXHQgIFx0PC9kaXY+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmVcIj5cbiAgXHQgICAgICA8ZGl2IGlkPVwicG5cIj5QaG9uZSBOdW1iZXI8L2Rpdj5cbiAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJwaG9uZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDwvZGl2PlxuICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQyXCIgb25DbGljaz17dGhpcy5vbkNvbnRhY3ROZXh0Q2xpY2suYmluZCh0aGlzKX0+e3BheW1lbnROZXh0QnV0dG9ufTwvZGl2PlxuICBcdCAgPC9kaXY+XG4gIFx0KTtcbiAgfVxufVxuXG5jbGFzcyBQYXltZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvblBheW1lbnROZXh0Q2xpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICBkb25lOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3Qgb25SZXZpZXcgPSB0aGlzLnN0YXRlLmRvbmU7XG4gIFx0Y29uc3QgcmV2aWV3TmV4dEJ1dHRvbiA9IG9uUmV2aWV3ID8gKDxSZXZpZXcgLz5cbiAgXHQpIDogKFxuICBcdCAgJ05leHQnXG4gIFx0KTtcblxuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRcIj5cbiAgXHQgICAgPGRpdiBpZD1cIm51bVwiPkNyZWRpdCBDYXJkIE51bWJlcjwvZGl2PlxuICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJudW1iZXJcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgICA8ZGl2IGlkPVwiZFwiPkV4cGlyeSBEYXRlPC9kaXY+XG4gIFx0ICAgIDx0ZXh0YXJlYSBpZD1cImRhdGVcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuICBcdCAgICA8ZGl2IGlkPVwiY3Z2bnVtXCI+Q1ZWPC9kaXY+XG4gIFx0ICAgIDx0ZXh0YXJlYSBpZD1cImN2dlwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDxkaXYgaWQ9XCJ6Y1wiPkJpbGxpbmcgWmlwIENvZGU8L2Rpdj5cbiAgXHQgICAgPHRleHRhcmVhIGlkPVwiYmlsbGluZ1wiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDNcIiBvbkNsaWNrPXt0aGlzLm9uUGF5bWVudE5leHRDbGljay5iaW5kKHRoaXMpfT57cmV2aWV3TmV4dEJ1dHRvbn08L2Rpdj5cbiAgXHQgIDwvZGl2PlxuICBcdCk7XG4gIH1cblxufVxuXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZVxuICBcdH1cbiAgfVxuXG4gIG9uUHVyY2hhc2VDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBvblB1cmNoYXNlID0gdGhpcy5zdGF0ZS5kb25lO1xuICBcdGNvbnN0IHB1cmNoYXNlQnV0dG9uID0gb25QdXJjaGFzZSA/ICg8QXBwIC8+XG4gIFx0KSA6IChcbiAgXHQgICdQdXJjaGFzZSdcbiAgXHQpO1xuXG4gIFx0cmV0dXJuIChcbiAgXHQgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICBcdCAgICA8ZGl2PlBsZWFzZSByZXZpZXcgeW91ciBvcmRlcjo8L2Rpdj5cbiAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMub25QdXJjaGFzZUNsaWNrLmJpbmQodGhpcyl9PntwdXJjaGFzZUJ1dHRvbn08L2Rpdj5cbiAgXHQgIDwvZGl2PlxuICBcdCk7XG4gIH1cblxufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuIl19
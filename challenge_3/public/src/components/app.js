'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    // this.customerData = {
    //   this.name = '';
    //   this.email = '';
    //   this.password = '';
    //   this.add1 = '';
    //   this.add2 = '';
    //   this.city = '';
    //   this.state = '';
    //   this.zip = '';
    //   this.phone = '';
    //   this.cardNumber = '';
    //   this.expiry = '';
    //   this.cvv = '';
    //   this.billingZip = '';
    // };

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      personal: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'sendPostRequest',
    value: function sendPostRequest(input) {
      $.ajax({
        url: 'http://127.0.0.1:1337',
        type: 'POST',
        data: JSON.stringify(input),
        contentType: 'application/json',
        success: function success(data) {
          console.log('data processed!');
          console.log(data);
        },
        error: function error(_error) {
          console.error('error: ', _error);
        }
      });
    }
  }, {
    key: 'onCheckoutClick',
    value: function onCheckoutClick() {
      this.setState({
        personal: true
      });
      this.sendPostRequest(this.customerData);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.personal) {
        return React.createElement(Personal, { customerData: this.customerData, sendPostRequest: this.sendPostRequest });
      } else {
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
            { className: 'checkout', onClick: this.onCheckoutClick.bind(this) },
            'Checkout'
          )
        );
      }
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
      done: false,
      name: '',
      email: '',
      password: ''
    };
    return _this2;
  }

  _createClass(Personal, [{
    key: 'getName',
    value: function getName(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: 'getEmail',
    value: function getEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: 'getPW',
    value: function getPW(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: 'onPersonalNextClick',
    value: function onPersonalNextClick(event) {
      this.setState({
        done: true
      });
      // this.props.customerData.name = this.state.name;
      // this.props.customerData.email = this.state.email;
      // this.props.customerData.password = this.state.password;
      // this.props.sendPostRequest(this.props.customerData);
      this.props.sendPostRequest({ 'name': this.state.name, 'email': this.state.password, 'password': this.state.password });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.done) {
        return React.createElement(Contact, { customerData: this.props.customerData, sendPostRequest: this.props.sendPostRequest });
      } else {

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
            React.createElement('textarea', { id: 'name', value: this.state.name, onChange: this.getName.bind(this), cols: '30' })
          ),
          React.createElement(
            'div',
            { className: 'email' },
            React.createElement(
              'div',
              { id: 'e' },
              'Email'
            ),
            React.createElement('textarea', { id: 'email', value: this.state.email, onChange: this.getEmail.bind(this), cols: '30' })
          ),
          React.createElement(
            'div',
            { className: 'password' },
            React.createElement(
              'div',
              { id: 'pw' },
              'Password'
            ),
            React.createElement('textarea', { id: 'password', value: this.state.password, onChange: this.getPW.bind(this), cols: '30' })
          ),
          React.createElement(
            'div',
            { className: 'next1', onClick: this.onPersonalNextClick.bind(this) },
            'Next'
          )
        );
      }
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
      done: false,
      add1: '',
      add2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
    return _this3;
  }

  _createClass(Contact, [{
    key: 'getAddress1',
    value: function getAddress1(event) {
      this.setState({
        add1: event.target.value
      });
    }
  }, {
    key: 'getAddress2',
    value: function getAddress2(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: 'getCity',
    value: function getCity(event) {
      this.setState({
        city: event.target.value
      });
    }
  }, {
    key: 'getState',
    value: function getState(event) {
      this.setState({
        state: event.target.value
      });
    }
  }, {
    key: 'getZip',
    value: function getZip(event) {
      this.setState({
        zip: event.target.value
      });
    }
  }, {
    key: 'getPhone',
    value: function getPhone(event) {
      this.setState({
        phone: event.target.value
      });
    }
  }, {
    key: 'onContactNextClick',
    value: function onContactNextClick() {
      this.setState({
        done: true
      });
      // this.props.customerData.add1 = this.state.add1;
      // this.props.customerData.add2 = this.state.add2;
      // this.props.customerData.city = this.state.city;
      // this.props.customerData.state = this.state.state;
      // this.props.customerData.zip = this.state.zip;
      // this.props.customerData.phone = this.state.phone;
      // this.props.sendPostRequest(this.props.customerData);
      this.props.sendPostRequest({ 'add1': this.state.add1, 'add2': this.state.add2, 'city': this.state.city, 'state': this.state.state, 'zip': this.state.zip, 'phone': this.state.phone });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.done) {
        return React.createElement(Payment, { customerData: this.props.customerData, sendPostRequest: this.props.sendPostRequest });
      } else {

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
            React.createElement('textarea', { id: 'address1', cols: '30', value: this.state.add1, onChange: this.getAddress1.bind(this) }),
            React.createElement(
              'div',
              { id: 'add2' },
              'Address Line 2'
            ),
            React.createElement('textarea', { id: 'address2', cols: '30', value: this.state.add2, onChange: this.getAddress2.bind(this) }),
            React.createElement(
              'div',
              { id: 'c' },
              'City'
            ),
            React.createElement('textarea', { id: 'city', cols: '30', value: this.state.city, onChange: this.getCity.bind(this) }),
            React.createElement(
              'div',
              { id: 'st' },
              'State'
            ),
            React.createElement('textarea', { id: 'state', cols: '30', value: this.state.state, onChange: this.getState.bind(this) }),
            React.createElement(
              'div',
              { id: 'zip' },
              'Zip Code'
            ),
            React.createElement('textarea', { id: 'zipcode', cols: '30', value: this.state.zip, onChange: this.getZip.bind(this) })
          ),
          React.createElement(
            'div',
            { className: 'phone' },
            React.createElement(
              'div',
              { id: 'pn' },
              'Phone Number'
            ),
            React.createElement('textarea', { id: 'phone', cols: '30', value: this.state.phone, onChange: this.getPhone.bind(this) })
          ),
          React.createElement(
            'div',
            { className: 'next2', onClick: this.onContactNextClick.bind(this) },
            'Next'
          )
        );
      }
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
      done: false,
      cardNumber: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    };
    return _this4;
  }

  _createClass(Payment, [{
    key: 'getCardNumber',
    value: function getCardNumber(event) {
      this.setState({
        cardNumber: event.target.value
      });
    }
  }, {
    key: 'getExpiry',
    value: function getExpiry(event) {
      this.setState({
        expiry: event.target.value
      });
    }
  }, {
    key: 'getCVV',
    value: function getCVV(event) {
      this.setState({
        cvv: event.target.value
      });
    }
  }, {
    key: 'getBillZipCode',
    value: function getBillZipCode(event) {
      this.setState({
        billingZipCode: event.target.value
      });
    }
  }, {
    key: 'onPaymentNextClick',
    value: function onPaymentNextClick() {
      this.setState({
        done: true
      });
      // this.props.customerData.cardNumber = this.state.cardNumber;
      // this.props.customerData.expiry = this.state.expiry;
      // this.props.customerData.cvv = this.state.cvv;
      // this.props.customerData.billingZipCode = this.state.billingZipCode;
      // this.props.sendPostRequest(this.props.customerData);
      this.props.sendPostRequest({ 'cardNumber': this.state.cardNumber, 'expiry': this.state.expiry, 'cvv': this.state.cvv, 'billingZipCode': this.state.billingZipCode });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.done) {
        return React.createElement(Review, null);
      } else {
        return React.createElement(
          'div',
          { className: 'payment' },
          React.createElement(
            'div',
            { id: 'num' },
            'Credit Card Number'
          ),
          React.createElement('textarea', { id: 'number', cols: '30', value: this.state.cardNumber, onChange: this.getCardNumber.bind(this) }),
          React.createElement(
            'div',
            { id: 'd' },
            'Expiry Date'
          ),
          React.createElement('textarea', { id: 'date', cols: '30', value: this.state.expiry, onChange: this.getExpiry.bind(this) }),
          React.createElement(
            'div',
            { id: 'cvvnum' },
            'CVV'
          ),
          React.createElement('textarea', { id: 'cvv', cols: '30', value: this.state.cvv, onChange: this.getCVV.bind(this) }),
          React.createElement(
            'div',
            { id: 'zc' },
            'Billing Zip Code'
          ),
          React.createElement('textarea', { id: 'billing', cols: '30', value: this.state.billingZipCode, onChange: this.getBillZipCode.bind(this) }),
          React.createElement(
            'div',
            { className: 'next3', onClick: this.onPaymentNextClick.bind(this) },
            'Next'
          )
        );
      }
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
      if (this.state.done) {
        return React.createElement(App, null);
      } else {
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
            'Purchase'
          )
        );
      }
    }
  }]);

  return Review;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZXJzb25hbCIsImlucHV0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInNlbmRQb3N0UmVxdWVzdCIsImN1c3RvbWVyRGF0YSIsIm9uQ2hlY2tvdXRDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBlcnNvbmFsIiwiZG9uZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldE5hbWUiLCJnZXRFbWFpbCIsImdldFBXIiwib25QZXJzb25hbE5leHRDbGljayIsIkNvbnRhY3QiLCJhZGQxIiwiYWRkMiIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsImdldEFkZHJlc3MxIiwiZ2V0QWRkcmVzczIiLCJnZXRDaXR5IiwiZ2V0U3RhdGUiLCJnZXRaaXAiLCJnZXRQaG9uZSIsIm9uQ29udGFjdE5leHRDbGljayIsIlBheW1lbnQiLCJjYXJkTnVtYmVyIiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbGluZ1ppcCIsImJpbGxpbmdaaXBDb2RlIiwiZ2V0Q2FyZE51bWJlciIsImdldEV4cGlyeSIsImdldENWViIsImdldEJpbGxaaXBDb2RlIiwib25QYXltZW50TmV4dENsaWNrIiwiUmV2aWV3Iiwib25QdXJjaGFzZUNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QURGO0FBTUE7QUFDRDs7OztFQTFCa0JDLE1BQU1DLFM7O0FBNkIzQnVDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdC8vIHRoaXMuY3VzdG9tZXJEYXRhID0ge1xuICBcdC8vICAgdGhpcy5uYW1lID0gJyc7XG4gIFx0Ly8gICB0aGlzLmVtYWlsID0gJyc7XG4gIFx0Ly8gICB0aGlzLnBhc3N3b3JkID0gJyc7XG4gIFx0Ly8gICB0aGlzLmFkZDEgPSAnJztcbiAgXHQvLyAgIHRoaXMuYWRkMiA9ICcnO1xuICBcdC8vICAgdGhpcy5jaXR5ID0gJyc7XG4gIFx0Ly8gICB0aGlzLnN0YXRlID0gJyc7XG4gIFx0Ly8gICB0aGlzLnppcCA9ICcnO1xuICBcdC8vICAgdGhpcy5waG9uZSA9ICcnO1xuICBcdC8vICAgdGhpcy5jYXJkTnVtYmVyID0gJyc7XG4gIFx0Ly8gICB0aGlzLmV4cGlyeSA9ICcnO1xuICBcdC8vICAgdGhpcy5jdnYgPSAnJztcbiAgXHQvLyAgIHRoaXMuYmlsbGluZ1ppcCA9ICcnO1xuICBcdC8vIH07XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgcGVyc29uYWw6IGZhbHNlLFxuICBcdH1cbiAgfVxuXG4gIHNlbmRQb3N0UmVxdWVzdChpbnB1dCkge1xuXHQkLmFqYXgoe1xuXHRcdHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MTMzNycsXG5cdFx0dHlwZTogJ1BPU1QnLFxuXHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGlucHV0KSxcblx0XHRjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0ICBjb25zb2xlLmxvZygnZGF0YSBwcm9jZXNzZWQhJyk7XG5cdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcblx0XHR9LFxuXHRcdGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHQgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOiAnLCBlcnJvcik7XG5cdFx0fVxuXHR9KTtcbiAgfVxuXG4gIG9uQ2hlY2tvdXRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBlcnNvbmFsOiB0cnVlXG4gIFx0fSk7XG4gIFx0dGhpcy5zZW5kUG9zdFJlcXVlc3QodGhpcy5jdXN0b21lckRhdGEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGlmICh0aGlzLnN0YXRlLnBlcnNvbmFsKSB7XG4gIFx0ICByZXR1cm4gKDxQZXJzb25hbCBjdXN0b21lckRhdGE9e3RoaXMuY3VzdG9tZXJEYXRhfSBzZW5kUG9zdFJlcXVlc3Q9e3RoaXMuc2VuZFBvc3RSZXF1ZXN0fSAvPik7XG4gIFx0fSBlbHNlIHtcbiAgXHRyZXR1cm4gKFxuICBcdCAgPGRpdj5cbiAgXHQgICAgPGgxPlNob3BwaW5nIENhcnQ8L2gxPlxuICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCIgb25DbGljaz17dGhpcy5vbkNoZWNrb3V0Q2xpY2suYmluZCh0aGlzKX0+Q2hlY2tvdXQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBcdCk7XG4gICB9XG4gIH1cbn1cblxuY2xhc3MgUGVyc29uYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZSxcbiAgXHQgIG5hbWU6ICcnLFxuICBcdCAgZW1haWw6ICcnLFxuICBcdCAgcGFzc3dvcmQ6ICcnXG4gIFx0fVxuICB9XG5cbiAgZ2V0TmFtZShldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRFbWFpbChldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICBcdH0pO1xuICB9XG5cbiAgZ2V0UFcoZXZlbnQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWVcbiAgXHR9KTtcbiAgfVxuXG4gIG9uUGVyc29uYWxOZXh0Q2xpY2soZXZlbnQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgXHQvLyB0aGlzLnByb3BzLmN1c3RvbWVyRGF0YS5uYW1lID0gdGhpcy5zdGF0ZS5uYW1lO1xuICBcdC8vIHRoaXMucHJvcHMuY3VzdG9tZXJEYXRhLmVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgXHQvLyB0aGlzLnByb3BzLmN1c3RvbWVyRGF0YS5wYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQ7XG4gIFx0Ly8gdGhpcy5wcm9wcy5zZW5kUG9zdFJlcXVlc3QodGhpcy5wcm9wcy5jdXN0b21lckRhdGEpO1xuICBcdHRoaXMucHJvcHMuc2VuZFBvc3RSZXF1ZXN0KHsnbmFtZSc6IHRoaXMuc3RhdGUubmFtZSwgJ2VtYWlsJzogdGhpcy5zdGF0ZS5wYXNzd29yZCwgJ3Bhc3N3b3JkJzogdGhpcy5zdGF0ZS5wYXNzd29yZH0pO1xuICB9XG4gXG4gIHJlbmRlcigpIHtcbiAgXHRpZiAodGhpcy5zdGF0ZS5kb25lKSB7XG4gIFx0ICByZXR1cm4gKDxDb250YWN0IGN1c3RvbWVyRGF0YT17dGhpcy5wcm9wcy5jdXN0b21lckRhdGF9IHNlbmRQb3N0UmVxdWVzdD17dGhpcy5wcm9wcy5zZW5kUG9zdFJlcXVlc3R9IC8+KTtcbiAgXHR9IGVsc2Uge1xuXG5cdCAgXHRyZXR1cm4gKFxuXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbmFsXCI+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwiY3JlYXRlXCI+Q3JlYXRlIGFuIGFjY291bnQhPC9kaXY+XG5cdCAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cblx0ICBcdCAgXHQgICAgPGRpdiBpZD1cIm5cIj5OYW1lPC9kaXY+XG5cdCAgXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cIm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5nZXROYW1lLmJpbmQodGhpcyl9IGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0ICA8L2Rpdj5cblx0ICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cblx0ICBcdCAgXHQgICAgPGRpdiBpZD1cImVcIj5FbWFpbDwvZGl2PlxuXHQgIFx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5nZXRFbWFpbC5iaW5kKHRoaXMpfSBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuXHQgIFx0ICBcdCAgPC9kaXY+XG5cdCAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkXCI+XG5cdCAgXHQgIFx0ICAgIDxkaXYgaWQ9XCJwd1wiPlBhc3N3b3JkPC9kaXY+XG5cdCAgXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmdldFBXLmJpbmQodGhpcyl9IGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0ICA8L2Rpdj5cblx0ICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDFcIiBvbkNsaWNrPXt0aGlzLm9uUGVyc29uYWxOZXh0Q2xpY2suYmluZCh0aGlzKX0+TmV4dDwvZGl2PlxuXHQgIFx0ICA8L2Rpdj5cblx0ICAgICk7XG5cdCAgfVxuICB9XG59XG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZSxcbiAgXHQgIGFkZDE6ICcnLFxuICBcdCAgYWRkMjogJycsXG4gIFx0ICBjaXR5OiAnJyxcbiAgXHQgIHN0YXRlOiAnJyxcbiAgXHQgIHppcDogJycsXG4gIFx0ICBwaG9uZTogJydcbiAgXHR9XG4gIH1cblxuICBnZXRBZGRyZXNzMShldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgYWRkMTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRBZGRyZXNzMihldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICBcdH0pO1xuICB9XG5cbiAgZ2V0Q2l0eShldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgY2l0eTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRTdGF0ZShldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgc3RhdGU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICBcdH0pO1xuICB9XG5cbiAgZ2V0WmlwKGV2ZW50KSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICB6aXA6IGV2ZW50LnRhcmdldC52YWx1ZVxuICBcdH0pO1xuICB9XG5cbiAgZ2V0UGhvbmUoZXZlbnQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBob25lOiBldmVudC50YXJnZXQudmFsdWVcbiAgXHR9KTtcbiAgfVxuXG4gIG9uQ29udGFjdE5leHRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgXHQvLyB0aGlzLnByb3BzLmN1c3RvbWVyRGF0YS5hZGQxID0gdGhpcy5zdGF0ZS5hZGQxO1xuICBcdC8vIHRoaXMucHJvcHMuY3VzdG9tZXJEYXRhLmFkZDIgPSB0aGlzLnN0YXRlLmFkZDI7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEuY2l0eSA9IHRoaXMuc3RhdGUuY2l0eTtcbiAgXHQvLyB0aGlzLnByb3BzLmN1c3RvbWVyRGF0YS5zdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEuemlwID0gdGhpcy5zdGF0ZS56aXA7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEucGhvbmUgPSB0aGlzLnN0YXRlLnBob25lO1xuICBcdC8vIHRoaXMucHJvcHMuc2VuZFBvc3RSZXF1ZXN0KHRoaXMucHJvcHMuY3VzdG9tZXJEYXRhKTtcbiAgXHR0aGlzLnByb3BzLnNlbmRQb3N0UmVxdWVzdCh7J2FkZDEnOiB0aGlzLnN0YXRlLmFkZDEsICdhZGQyJzogdGhpcy5zdGF0ZS5hZGQyLCAnY2l0eSc6IHRoaXMuc3RhdGUuY2l0eSwgJ3N0YXRlJzogdGhpcy5zdGF0ZS5zdGF0ZSwgJ3ppcCc6IHRoaXMuc3RhdGUuemlwLCAncGhvbmUnOiB0aGlzLnN0YXRlLnBob25lfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0aWYgKHRoaXMuc3RhdGUuZG9uZSkge1xuICBcdCAgcmV0dXJuICg8UGF5bWVudCBjdXN0b21lckRhdGE9e3RoaXMucHJvcHMuY3VzdG9tZXJEYXRhfSBzZW5kUG9zdFJlcXVlc3Q9e3RoaXMucHJvcHMuc2VuZFBvc3RSZXF1ZXN0fSAvPik7XG4gIFx0fSBlbHNlIHtcblxuXHQgIFx0cmV0dXJuIChcblx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG5cdCAgXHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG5cdCAgXHQgIFx0ICA8ZGl2IGlkPVwiYWRkMVwiPkFkZHJlc3MgTGluZSAxPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzMVwiIGNvbHM9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZDF9IG9uQ2hhbmdlPXt0aGlzLmdldEFkZHJlc3MxLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwiYWRkMlwiPkFkZHJlc3MgTGluZSAyPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzMlwiIGNvbHM9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZDJ9IG9uQ2hhbmdlPXt0aGlzLmdldEFkZHJlc3MyLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwiY1wiPkNpdHk8L2Rpdj5cblx0ICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cImNpdHlcIiBjb2xzPVwiMzBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17dGhpcy5nZXRDaXR5LmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwic3RcIj5TdGF0ZTwvZGl2PlxuXHQgIFx0ICAgICAgPHRleHRhcmVhIGlkPVwic3RhdGVcIiBjb2xzPVwiMzBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMuZ2V0U3RhdGUuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0ICBcdCAgICAgIDxkaXYgaWQ9XCJ6aXBcIj5aaXAgQ29kZTwvZGl2PlxuXHQgIFx0ICAgICAgPHRleHRhcmVhIGlkPVwiemlwY29kZVwiIGNvbHM9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnppcH0gb25DaGFuZ2U9e3RoaXMuZ2V0WmlwLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0PC9kaXY+XG5cdCAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPlxuXHQgIFx0ICAgICAgPGRpdiBpZD1cInBuXCI+UGhvbmUgTnVtYmVyPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJwaG9uZVwiIGNvbHM9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lfSBvbkNoYW5nZT17dGhpcy5nZXRQaG9uZS5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuXHQgIFx0ICAgIDwvZGl2PlxuXHQgIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDJcIiBvbkNsaWNrPXt0aGlzLm9uQ29udGFjdE5leHRDbGljay5iaW5kKHRoaXMpfT5OZXh0PC9kaXY+XG5cdCAgXHQgIDwvZGl2PlxuXHQgIFx0KTtcblx0ICB9XG4gIH1cbn1cblxuY2xhc3MgUGF5bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGRvbmU6IGZhbHNlLFxuICBcdCAgY2FyZE51bWJlcjogJycsXG4gIFx0ICBleHBpcnk6ICcnLFxuICBcdCAgY3Z2OiAnJyxcbiAgXHQgIGJpbGxpbmdaaXA6ICcnXG4gIFx0fVxuICB9XG5cbiAgZ2V0Q2FyZE51bWJlcihldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgY2FyZE51bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRFeHBpcnkoZXZlbnQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGV4cGlyeTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRDVlYoZXZlbnQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGN2djogZXZlbnQudGFyZ2V0LnZhbHVlXG4gIFx0fSk7XG4gIH1cblxuICBnZXRCaWxsWmlwQ29kZShldmVudCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgYmlsbGluZ1ppcENvZGU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICBcdH0pO1xuICB9XG5cbiAgb25QYXltZW50TmV4dENsaWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdCAgZG9uZTogdHJ1ZVxuICBcdH0pO1xuICBcdC8vIHRoaXMucHJvcHMuY3VzdG9tZXJEYXRhLmNhcmROdW1iZXIgPSB0aGlzLnN0YXRlLmNhcmROdW1iZXI7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEuZXhwaXJ5ID0gdGhpcy5zdGF0ZS5leHBpcnk7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEuY3Z2ID0gdGhpcy5zdGF0ZS5jdnY7XG4gIFx0Ly8gdGhpcy5wcm9wcy5jdXN0b21lckRhdGEuYmlsbGluZ1ppcENvZGUgPSB0aGlzLnN0YXRlLmJpbGxpbmdaaXBDb2RlO1xuICBcdC8vIHRoaXMucHJvcHMuc2VuZFBvc3RSZXF1ZXN0KHRoaXMucHJvcHMuY3VzdG9tZXJEYXRhKTtcbiAgXHR0aGlzLnByb3BzLnNlbmRQb3N0UmVxdWVzdCh7J2NhcmROdW1iZXInOiB0aGlzLnN0YXRlLmNhcmROdW1iZXIsICdleHBpcnknOiB0aGlzLnN0YXRlLmV4cGlyeSwgJ2N2dic6IHRoaXMuc3RhdGUuY3Z2LCAnYmlsbGluZ1ppcENvZGUnOiB0aGlzLnN0YXRlLmJpbGxpbmdaaXBDb2RlfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kb25lKSB7XG4gICAgICByZXR1cm4gKDxSZXZpZXcgLz4pO1xuICAgIH0gZWxzZSB7XG5cdCAgXHRyZXR1cm4gKFxuXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRcIj5cblx0ICBcdCAgICA8ZGl2IGlkPVwibnVtXCI+Q3JlZGl0IENhcmQgTnVtYmVyPC9kaXY+XG5cdCAgXHQgICAgPHRleHRhcmVhIGlkPVwibnVtYmVyXCIgY29scz1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2FyZE51bWJlcn0gb25DaGFuZ2U9e3RoaXMuZ2V0Q2FyZE51bWJlci5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuXHQgIFx0ICAgIDxkaXYgaWQ9XCJkXCI+RXhwaXJ5IERhdGU8L2Rpdj5cblx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJkYXRlXCIgY29scz1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuZXhwaXJ5fSBvbkNoYW5nZT17dGhpcy5nZXRFeHBpcnkuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0ICBcdCAgICA8ZGl2IGlkPVwiY3Z2bnVtXCI+Q1ZWPC9kaXY+XG5cdCAgXHQgICAgPHRleHRhcmVhIGlkPVwiY3Z2XCIgY29scz1cIjMwXCIgdmFsdWU9e3RoaXMuc3RhdGUuY3Z2fSBvbkNoYW5nZT17dGhpcy5nZXRDVlYuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0ICBcdCAgICA8ZGl2IGlkPVwiemNcIj5CaWxsaW5nIFppcCBDb2RlPC9kaXY+XG5cdCAgXHQgICAgPHRleHRhcmVhIGlkPVwiYmlsbGluZ1wiIGNvbHM9XCIzMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmJpbGxpbmdaaXBDb2RlfSBvbkNoYW5nZT17dGhpcy5nZXRCaWxsWmlwQ29kZS5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuXHQgIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dDNcIiBvbkNsaWNrPXt0aGlzLm9uUGF5bWVudE5leHRDbGljay5iaW5kKHRoaXMpfT5OZXh0PC9kaXY+XG5cdCAgXHQgIDwvZGl2PlxuXHQgIFx0KTtcblx0ICB9XG4gIH1cblxufVxuXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcblxuICBcdHRoaXMuc3RhdGUgPSB7XG4gIFx0ICBkb25lOiBmYWxzZVxuICBcdH1cbiAgfVxuXG4gIG9uUHVyY2hhc2VDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRpZiAodGhpcy5zdGF0ZS5kb25lKSB7XG4gIFx0ICByZXR1cm4gKDxBcHAgLz4pO1xuICBcdH0gZWxzZSB7XG5cdCAgXHRyZXR1cm4gKFxuXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0ICBcdCAgICA8ZGl2PlBsZWFzZSByZXZpZXcgeW91ciBvcmRlcjo8L2Rpdj5cblx0ICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmNoYXNlXCIgb25DbGljaz17dGhpcy5vblB1cmNoYXNlQ2xpY2suYmluZCh0aGlzKX0+UHVyY2hhc2U8L2Rpdj5cblx0ICBcdCAgPC9kaXY+XG5cdCAgXHQpO1xuXHQgIH1cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG4iXX0=
"use strict";

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
    key: "onCheckoutClick",
    value: function onCheckoutClick() {
      this.setState({
        personal: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.personal) {
        return React.createElement(Personal, null);
      } else {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Shopping Cart"
          ),
          React.createElement(
            "div",
            { className: "checkout", onClick: this.onCheckoutClick.bind(this) },
            "Checkout"
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
      done: false
    };
    return _this2;
  }

  _createClass(Personal, [{
    key: "onPersonalNextClick",
    value: function onPersonalNextClick() {
      this.setState({
        done: true
      });
      sendPostRequest({ name: 'giulia' });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.done) {
        return React.createElement(Contact, null);
      } else {

        return React.createElement(
          "div",
          { className: "personal" },
          React.createElement(
            "div",
            { id: "create" },
            "Create an account!"
          ),
          React.createElement(
            "div",
            { className: "name" },
            React.createElement(
              "div",
              { id: "n" },
              "Name"
            ),
            React.createElement("textarea", { id: "name", cols: "30" })
          ),
          React.createElement(
            "div",
            { className: "email" },
            React.createElement(
              "div",
              { id: "e" },
              "Email"
            ),
            React.createElement("textarea", { id: "email", cols: "30" })
          ),
          React.createElement(
            "div",
            { className: "password" },
            React.createElement(
              "div",
              { id: "pw" },
              "Password"
            ),
            React.createElement("textarea", { id: "password", cols: "30" })
          ),
          React.createElement(
            "div",
            { className: "next1", onClick: this.onPersonalNextClick.bind(this) },
            "Next"
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
      done: false
    };
    return _this3;
  }

  _createClass(Contact, [{
    key: "onContactNextClick",
    value: function onContactNextClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.done) {
        return React.createElement(Payment, null);
      } else {

        return React.createElement(
          "div",
          { className: "contact" },
          React.createElement(
            "div",
            { className: "address" },
            React.createElement(
              "div",
              { id: "add1" },
              "Address Line 1"
            ),
            React.createElement("textarea", { id: "address1", cols: "30" }),
            React.createElement(
              "div",
              { id: "add2" },
              "Address Line 2"
            ),
            React.createElement("textarea", { id: "address2", cols: "30" }),
            React.createElement(
              "div",
              { id: "c" },
              "City"
            ),
            React.createElement("textarea", { id: "city", cols: "30" }),
            React.createElement(
              "div",
              { id: "st" },
              "State"
            ),
            React.createElement("textarea", { id: "state", cols: "30" }),
            React.createElement(
              "div",
              { id: "zip" },
              "Zip Code"
            ),
            React.createElement("textarea", { id: "zipcode", cols: "30" })
          ),
          React.createElement(
            "div",
            { className: "phone" },
            React.createElement(
              "div",
              { id: "pn" },
              "Phone Number"
            ),
            React.createElement("textarea", { id: "phone", cols: "30" })
          ),
          React.createElement(
            "div",
            { className: "next2", onClick: this.onContactNextClick.bind(this) },
            "Next"
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
      done: false
    };
    return _this4;
  }

  _createClass(Payment, [{
    key: "onPaymentNextClick",
    value: function onPaymentNextClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.done) {
        return React.createElement(Review, null);
      } else {
        return React.createElement(
          "div",
          { className: "payment" },
          React.createElement(
            "div",
            { id: "num" },
            "Credit Card Number"
          ),
          React.createElement("textarea", { id: "number", cols: "30" }),
          React.createElement(
            "div",
            { id: "d" },
            "Expiry Date"
          ),
          React.createElement("textarea", { id: "date", cols: "30" }),
          React.createElement(
            "div",
            { id: "cvvnum" },
            "CVV"
          ),
          React.createElement("textarea", { id: "cvv", cols: "30" }),
          React.createElement(
            "div",
            { id: "zc" },
            "Billing Zip Code"
          ),
          React.createElement("textarea", { id: "billing", cols: "30" }),
          React.createElement(
            "div",
            { className: "next3", onClick: this.onPaymentNextClick.bind(this) },
            "Next"
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
    key: "onPurchaseClick",
    value: function onPurchaseClick() {
      this.setState({
        done: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.done) {
        return React.createElement(App, null);
      } else {
        return React.createElement(
          "div",
          { className: "details" },
          React.createElement(
            "div",
            null,
            "Please review your order:"
          ),
          React.createElement(
            "div",
            { className: "purchase", onClick: this.onPurchaseClick.bind(this) },
            "Purchase"
          )
        );
      }
    }
  }]);

  return Review;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZXJzb25hbCIsInNldFN0YXRlIiwib25DaGVja291dENsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVyc29uYWwiLCJkb25lIiwic2VuZFBvc3RSZXF1ZXN0IiwibmFtZSIsIm9uUGVyc29uYWxOZXh0Q2xpY2siLCJDb250YWN0Iiwib25Db250YWN0TmV4dENsaWNrIiwiUGF5bWVudCIsIm9uUGF5bWVudE5leHRDbGljayIsIlJldmlldyIsIm9uUHVyY2hhc2VDbGljayIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVTtBQURDLEtBQWI7QUFIa0I7QUFNbEI7Ozs7c0NBRWlCO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRCxrQkFBVTtBQURFLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1IsVUFBSSxLQUFLRCxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsZUFBUSxvQkFBQyxRQUFELE9BQVI7QUFDRCxPQUZELE1BRU87QUFDUCxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTLEtBQUtFLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQW5DO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFNQztBQUNEOzs7O0VBMUJlQyxNQUFNQyxTOztJQTZCbEJDLFE7OztBQUNKLG9CQUFZUixLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1pBLEtBRFk7O0FBR2xCLFdBQUtD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S0MsS0FBTCxHQUFhO0FBQ1hRLFlBQU07QUFESyxLQUFiO0FBSGtCO0FBTWxCOzs7O3NDQUVpQjtBQUNqQixXQUFLTixRQUFMLENBQWM7QUFDWk0sY0FBTTtBQURNLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1IsVUFBSSxLQUFLUixLQUFMLENBQVdRLElBQWYsRUFBcUI7QUFDbkIsZUFBUSxvQkFBQyxHQUFELE9BQVI7QUFDRCxPQUZELE1BRU87QUFDTixlQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTLEtBQUtTLGVBQUwsQ0FBcUJiLElBQXJCLENBQTBCLElBQTFCLENBQW5DO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFNQTtBQUNEOzs7O0VBMUJrQkMsTUFBTUMsUzs7QUE2QjNCWSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgcGVyc29uYWw6IGZhbHNlLFxuICBcdH1cbiAgfVxuXG4gIG9uQ2hlY2tvdXRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIHBlcnNvbmFsOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0aWYgKHRoaXMuc3RhdGUucGVyc29uYWwpIHtcbiAgXHQgIHJldHVybiAoPFBlcnNvbmFsIC8+KTtcbiAgXHR9IGVsc2Uge1xuICBcdHJldHVybiAoXG4gIFx0ICA8ZGl2PlxuICBcdCAgICA8aDE+U2hvcHBpbmcgQ2FydDwvaDE+XG4gIFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIiBvbkNsaWNrPXt0aGlzLm9uQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpfT5DaGVja291dDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIFx0KTtcbiAgIH1cbiAgfVxufVxuXG5jbGFzcyBQZXJzb25hbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuXG4gIFx0dGhpcy5zdGF0ZSA9IHtcbiAgXHQgIGRvbmU6IGZhbHNlXG4gIFx0fVxuICB9XG5cbiAgb25QZXJzb25hbE5leHRDbGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHQgIGRvbmU6IHRydWVcbiAgXHR9KTtcbiAgXHRzZW5kUG9zdFJlcXVlc3Qoe25hbWU6ICdnaXVsaWEnfSk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICBcdGlmICh0aGlzLnN0YXRlLmRvbmUpIHtcbiAgXHQgIHJldHVybiAoPENvbnRhY3QgLz4pO1xuICBcdH0gZWxzZSB7XG5cblx0ICBcdHJldHVybiAoXG5cdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWxcIj5cblx0ICBcdCAgICAgIDxkaXYgaWQ9XCJjcmVhdGVcIj5DcmVhdGUgYW4gYWNjb3VudCE8L2Rpdj5cblx0ICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuXHQgIFx0ICBcdCAgICA8ZGl2IGlkPVwiblwiPk5hbWU8L2Rpdj5cblx0ICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwibmFtZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0ICA8L2Rpdj5cblx0ICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cblx0ICBcdCAgXHQgICAgPGRpdiBpZD1cImVcIj5FbWFpbDwvZGl2PlxuXHQgIFx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJlbWFpbFwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0ICA8L2Rpdj5cblx0ICBcdCAgXHQgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRcIj5cblx0ICBcdCAgXHQgICAgPGRpdiBpZD1cInB3XCI+UGFzc3dvcmQ8L2Rpdj5cblx0ICBcdCAgXHQgICAgPHRleHRhcmVhIGlkPVwicGFzc3dvcmRcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuXHQgIFx0ICBcdCAgPC9kaXY+XG5cdCAgXHQgIFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQxXCIgb25DbGljaz17dGhpcy5vblBlcnNvbmFsTmV4dENsaWNrLmJpbmQodGhpcyl9Pk5leHQ8L2Rpdj5cblx0ICBcdCAgPC9kaXY+XG5cdCAgICApO1xuXHQgIH1cbiAgfVxufVxuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvbkNvbnRhY3ROZXh0Q2xpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICBkb25lOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0aWYgKHRoaXMuc3RhdGUuZG9uZSkge1xuICBcdCAgcmV0dXJuICg8UGF5bWVudCAvPik7XG4gIFx0fSBlbHNlIHtcblxuXHQgIFx0cmV0dXJuIChcblx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG5cdCAgXHQgIFx0PGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+XG5cdCAgXHQgIFx0ICA8ZGl2IGlkPVwiYWRkMVwiPkFkZHJlc3MgTGluZSAxPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzMVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwiYWRkMlwiPkFkZHJlc3MgTGluZSAyPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJhZGRyZXNzMlwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgICA8ZGl2IGlkPVwiY1wiPkNpdHk8L2Rpdj5cblx0ICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cImNpdHlcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuXHQgIFx0ICAgICAgPGRpdiBpZD1cInN0XCI+U3RhdGU8L2Rpdj5cblx0ICBcdCAgICAgIDx0ZXh0YXJlYSBpZD1cInN0YXRlXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cblx0ICBcdCAgICAgIDxkaXYgaWQ9XCJ6aXBcIj5aaXAgQ29kZTwvZGl2PlxuXHQgIFx0ICAgICAgPHRleHRhcmVhIGlkPVwiemlwY29kZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgIFx0PC9kaXY+XG5cdCAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPlxuXHQgIFx0ICAgICAgPGRpdiBpZD1cInBuXCI+UGhvbmUgTnVtYmVyPC9kaXY+XG5cdCAgXHQgICAgICA8dGV4dGFyZWEgaWQ9XCJwaG9uZVwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgPC9kaXY+XG5cdCAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0MlwiIG9uQ2xpY2s9e3RoaXMub25Db250YWN0TmV4dENsaWNrLmJpbmQodGhpcyl9Pk5leHQ8L2Rpdj5cblx0ICBcdCAgPC9kaXY+XG5cdCAgXHQpO1xuXHQgIH1cbiAgfVxufVxuXG5jbGFzcyBQYXltZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvblBheW1lbnROZXh0Q2xpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICBkb25lOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZG9uZSkge1xuICAgICAgcmV0dXJuICg8UmV2aWV3IC8+KTtcbiAgICB9IGVsc2Uge1xuXHQgIFx0cmV0dXJuIChcblx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50XCI+XG5cdCAgXHQgICAgPGRpdiBpZD1cIm51bVwiPkNyZWRpdCBDYXJkIE51bWJlcjwvZGl2PlxuXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cIm51bWJlclwiIGNvbHM9XCIzMFwiPjwvdGV4dGFyZWE+XG5cdCAgXHQgICAgPGRpdiBpZD1cImRcIj5FeHBpcnkgRGF0ZTwvZGl2PlxuXHQgIFx0ICAgIDx0ZXh0YXJlYSBpZD1cImRhdGVcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuXHQgIFx0ICAgIDxkaXYgaWQ9XCJjdnZudW1cIj5DVlY8L2Rpdj5cblx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJjdnZcIiBjb2xzPVwiMzBcIj48L3RleHRhcmVhPlxuXHQgIFx0ICAgIDxkaXYgaWQ9XCJ6Y1wiPkJpbGxpbmcgWmlwIENvZGU8L2Rpdj5cblx0ICBcdCAgICA8dGV4dGFyZWEgaWQ9XCJiaWxsaW5nXCIgY29scz1cIjMwXCI+PC90ZXh0YXJlYT5cblx0ICBcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQzXCIgb25DbGljaz17dGhpcy5vblBheW1lbnROZXh0Q2xpY2suYmluZCh0aGlzKX0+TmV4dDwvZGl2PlxuXHQgIFx0ICA8L2Rpdj5cblx0ICBcdCk7XG5cdCAgfVxuICB9XG5cbn1cblxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG5cbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdCAgZG9uZTogZmFsc2VcbiAgXHR9XG4gIH1cblxuICBvblB1cmNoYXNlQ2xpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0ICBkb25lOiB0cnVlXG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0aWYgKHRoaXMuc3RhdGUuZG9uZSkge1xuICBcdCAgcmV0dXJuICg8QXBwIC8+KTtcbiAgXHR9IGVsc2Uge1xuXHQgIFx0cmV0dXJuIChcblx0ICBcdCAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG5cdCAgXHQgICAgPGRpdj5QbGVhc2UgcmV2aWV3IHlvdXIgb3JkZXI6PC9kaXY+XG5cdCAgXHQgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMub25QdXJjaGFzZUNsaWNrLmJpbmQodGhpcyl9PlB1cmNoYXNlPC9kaXY+XG5cdCAgXHQgIDwvZGl2PlxuXHQgIFx0KTtcblx0ICB9XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuIl19
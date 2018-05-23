class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  personal: false,
  	}
  }

  onCheckoutClick() {
  	this.setState({
  	  personal: true
  	});
  }

  render() {
  	const onPersonal = this.state.personal;
  	const checkoutButton = onPersonal ? (<Personal />
  	) : (
  	  'Checkout'
  	);

  	return (
  	  <div>
  	    <h1>Shopping Cart</h1>
  	    <div className="checkout" onPersonal={onPersonal} onClick={this.onCheckoutClick.bind(this)}>{checkoutButton}</div>
      </div>
  	);
  }
}

class Personal extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false
  	}
  }

  onPersonalNextClick() {
  	this.setState({
  	  done: true
  	});
  }

  render() {
  	const onContact = this.state.done;
  	const contactNextButton = onContact ? (<Contact />
  	) : (
  	  'Next'
  	);

  	return (
  	  <div className="personal">
  	      <div id="create">Create an account!</div>
  	  	  <div className="name">
  	  	    <div id="n">Name</div>
  	  	    <textarea id="name" cols="30"></textarea>
  	  	  </div>
  	  	  <div className="email">
  	  	    <div id="e">Email</div>
  	  	    <textarea id="email" cols="30"></textarea>
  	  	  </div>
  	  	  <div className="password">
  	  	    <div id="pw">Password</div>
  	  	    <textarea id="password" cols="30"></textarea>
  	  	  </div>
  	  	  <div className="next1" onClick={this.onPersonalNextClick.bind(this)}>{contactNextButton}</div>
  	  </div>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false
  	}
  }

  onContactNextClick() {
  	this.setState({
  	  done: true
  	});
  }

  render() {
  	const onPayment = this.state.done;
  	const paymentNextButton = onPayment ? (<Payment />
  	) : (
  	  'Next'
  	);

  	return (
  	  <div className="contact">
  	  	<div className="address">
  	  	  <div id="add1">Address Line 1</div>
  	      <textarea id="address1" cols="30"></textarea>
  	      <div id="add2">Address Line 2</div>
  	      <textarea id="address2" cols="30"></textarea>
  	      <div id="c">City</div>
  	      <textarea id="city" cols="30"></textarea>
  	      <div id="st">State</div>
  	      <textarea id="state" cols="30"></textarea>
  	      <div id="zip">Zip Code</div>
  	      <textarea id="zipcode" cols="30"></textarea>
  	  	</div>
  	    <div className="phone">
  	      <div id="pn">Phone Number</div>
  	      <textarea id="phone" cols="30"></textarea>
  	    </div>
  	    <div className="next2" onClick={this.onContactNextClick.bind(this)}>{paymentNextButton}</div>
  	  </div>
  	);
  }
}

class Payment extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false
  	}
  }

  onPaymentNextClick() {
  	this.setState({
  	  done: true
  	});
  }

  render() {
  	const onReview = this.state.done;
  	const reviewNextButton = onReview ? (<Review />
  	) : (
  	  'Next'
  	);

  	return (
  	  <div className="payment">
  	    <div id="num">Credit Card Number</div>
  	    <textarea id="number" cols="30"></textarea>
  	    <div id="d">Expiry Date</div>
  	    <textarea id="date" cols="30"></textarea>
  	    <div id="cvvnum">CVV</div>
  	    <textarea id="cvv" cols="30"></textarea>
  	    <div id="zc">Billing Zip Code</div>
  	    <textarea id="billing" cols="30"></textarea>
  	    <div className="next3" onClick={this.onPaymentNextClick.bind(this)}>{reviewNextButton}</div>
  	  </div>
  	);
  }

}

class Review extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false
  	}
  }

  onPurchaseClick() {
  	this.setState({
  	  done: true
  	});
  }

  render() {
  	const onPurchase = this.state.done;
  	const purchaseButton = onPurchase ? (<App />
  	) : (
  	  'Purchase'
  	);

  	return (
  	  <div className="details">
  	    <div>Please review your order:</div>
  	    <div className="purchase" onClick={this.onPurchaseClick.bind(this)}>{purchaseButton}</div>
  	  </div>
  	);
  }

}



ReactDOM.render(<App />, document.getElementById("app"));


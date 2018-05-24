class App extends React.Component {
  constructor(props) {
  	super(props);

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

  	this.state = {
  	  personal: false,
  	}
  }

  sendPostRequest(input) {
	$.ajax({
		url: 'http://127.0.0.1:1337',
		type: 'POST',
		data: JSON.stringify(input),
		contentType: 'application/json',
		success: function (data) {
		  console.log('data processed!');
		  console.log(data);
		},
		error: function (error) {
		  console.error('error: ', error);
		}
	});
  }

  onCheckoutClick() {
  	this.setState({
  	  personal: true
  	});
  	this.sendPostRequest(this.customerData);
  }

  render() {
  	if (this.state.personal) {
  	  return (<Personal customerData={this.customerData} sendPostRequest={this.sendPostRequest} />);
  	} else {
  	return (
  	  <div>
  	    <h1>Shopping Cart</h1>
  	    <div className="checkout" onClick={this.onCheckoutClick.bind(this)}>Checkout</div>
      </div>
  	);
   }
  }
}

class Personal extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false,
  	  name: '',
  	  email: '',
  	  password: ''
  	}
  }

  getName(event) {
  	this.setState({
  	  name: event.target.value
  	});
  }

  getEmail(event) {
  	this.setState({
  	  email: event.target.value
  	});
  }

  getPW(event) {
  	this.setState({
  	  password: event.target.value
  	});
  }

  onPersonalNextClick(event) {
  	this.setState({
  	  done: true
  	});
  	// this.props.customerData.name = this.state.name;
  	// this.props.customerData.email = this.state.email;
  	// this.props.customerData.password = this.state.password;
  	// this.props.sendPostRequest(this.props.customerData);
  	this.props.sendPostRequest({'name': this.state.name, 'email': this.state.password, 'password': this.state.password});
  }
 
  render() {
  	if (this.state.done) {
  	  return (<Contact customerData={this.props.customerData} sendPostRequest={this.props.sendPostRequest} />);
  	} else {

	  	return (
	  	  <div className="personal">
	  	      <div id="create">Create an account!</div>
	  	  	  <div className="name">
	  	  	    <div id="n">Name</div>
	  	  	    <textarea id="name" value={this.state.name} onChange={this.getName.bind(this)} cols="30"></textarea>
	  	  	  </div>
	  	  	  <div className="email">
	  	  	    <div id="e">Email</div>
	  	  	    <textarea id="email" value={this.state.email} onChange={this.getEmail.bind(this)} cols="30"></textarea>
	  	  	  </div>
	  	  	  <div className="password">
	  	  	    <div id="pw">Password</div>
	  	  	    <textarea id="password" value={this.state.password} onChange={this.getPW.bind(this)} cols="30"></textarea>
	  	  	  </div>
	  	  	  <div className="next1" onClick={this.onPersonalNextClick.bind(this)}>Next</div>
	  	  </div>
	    );
	  }
  }
}

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false,
  	  add1: '',
  	  add2: '',
  	  city: '',
  	  state: '',
  	  zip: '',
  	  phone: ''
  	}
  }

  getAddress1(event) {
  	this.setState({
  	  add1: event.target.value
  	});
  }

  getAddress2(event) {
  	this.setState({
  	  email: event.target.value
  	});
  }

  getCity(event) {
  	this.setState({
  	  city: event.target.value
  	});
  }

  getState(event) {
  	this.setState({
  	  state: event.target.value
  	});
  }

  getZip(event) {
  	this.setState({
  	  zip: event.target.value
  	});
  }

  getPhone(event) {
  	this.setState({
  	  phone: event.target.value
  	});
  }

  onContactNextClick() {
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
  	this.props.sendPostRequest({'add1': this.state.add1, 'add2': this.state.add2, 'city': this.state.city, 'state': this.state.state, 'zip': this.state.zip, 'phone': this.state.phone});
  }

  render() {
  	if (this.state.done) {
  	  return (<Payment customerData={this.props.customerData} sendPostRequest={this.props.sendPostRequest} />);
  	} else {

	  	return (
	  	  <div className="contact">
	  	  	<div className="address">
	  	  	  <div id="add1">Address Line 1</div>
	  	      <textarea id="address1" cols="30" value={this.state.add1} onChange={this.getAddress1.bind(this)}></textarea>
	  	      <div id="add2">Address Line 2</div>
	  	      <textarea id="address2" cols="30" value={this.state.add2} onChange={this.getAddress2.bind(this)}></textarea>
	  	      <div id="c">City</div>
	  	      <textarea id="city" cols="30" value={this.state.city} onChange={this.getCity.bind(this)}></textarea>
	  	      <div id="st">State</div>
	  	      <textarea id="state" cols="30" value={this.state.state} onChange={this.getState.bind(this)}></textarea>
	  	      <div id="zip">Zip Code</div>
	  	      <textarea id="zipcode" cols="30" value={this.state.zip} onChange={this.getZip.bind(this)}></textarea>
	  	  	</div>
	  	    <div className="phone">
	  	      <div id="pn">Phone Number</div>
	  	      <textarea id="phone" cols="30" value={this.state.phone} onChange={this.getPhone.bind(this)}></textarea>
	  	    </div>
	  	    <div className="next2" onClick={this.onContactNextClick.bind(this)}>Next</div>
	  	  </div>
	  	);
	  }
  }
}

class Payment extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  done: false,
  	  cardNumber: '',
  	  expiry: '',
  	  cvv: '',
  	  billingZip: ''
  	}
  }

  getCardNumber(event) {
  	this.setState({
  	  cardNumber: event.target.value
  	});
  }

  getExpiry(event) {
  	this.setState({
  	  expiry: event.target.value
  	});
  }

  getCVV(event) {
  	this.setState({
  	  cvv: event.target.value
  	});
  }

  getBillZipCode(event) {
  	this.setState({
  	  billingZipCode: event.target.value
  	});
  }

  onPaymentNextClick() {
  	this.setState({
  	  done: true
  	});
  	// this.props.customerData.cardNumber = this.state.cardNumber;
  	// this.props.customerData.expiry = this.state.expiry;
  	// this.props.customerData.cvv = this.state.cvv;
  	// this.props.customerData.billingZipCode = this.state.billingZipCode;
  	// this.props.sendPostRequest(this.props.customerData);
  	this.props.sendPostRequest({'cardNumber': this.state.cardNumber, 'expiry': this.state.expiry, 'cvv': this.state.cvv, 'billingZipCode': this.state.billingZipCode})
  }

  render() {
    if (this.state.done) {
      return (<Review />);
    } else {
	  	return (
	  	  <div className="payment">
	  	    <div id="num">Credit Card Number</div>
	  	    <textarea id="number" cols="30" value={this.state.cardNumber} onChange={this.getCardNumber.bind(this)}></textarea>
	  	    <div id="d">Expiry Date</div>
	  	    <textarea id="date" cols="30" value={this.state.expiry} onChange={this.getExpiry.bind(this)}></textarea>
	  	    <div id="cvvnum">CVV</div>
	  	    <textarea id="cvv" cols="30" value={this.state.cvv} onChange={this.getCVV.bind(this)}></textarea>
	  	    <div id="zc">Billing Zip Code</div>
	  	    <textarea id="billing" cols="30" value={this.state.billingZipCode} onChange={this.getBillZipCode.bind(this)}></textarea>
	  	    <div className="next3" onClick={this.onPaymentNextClick.bind(this)}>Next</div>
	  	  </div>
	  	);
	  }
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
  	if (this.state.done) {
  	  return (<App />);
  	} else {
	  	return (
	  	  <div className="details">
	  	    <div>Please review your order:</div>
	  	    <div className="purchase" onClick={this.onPurchaseClick.bind(this)}>Purchase</div>
	  	  </div>
	  	);
	  }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));


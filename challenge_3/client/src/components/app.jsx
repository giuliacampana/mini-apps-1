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
  	    <h1>Tea World</h1>
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
  	const nextButton = onContact ? (<Contact />
  	) : (
  	  'Next'
  	);

  	return (
  	  <div className="personal">
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
  	  	  <div className="next1" onClick={this.onPersonalNextClick.bind(this)}>{nextButton}</div>
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
  	return (
  	  <div className="contact">
  	  	<div className="address">
  	  	  <div id="add">Address</div>
  	      <textarea id="address" cols="30"></textarea>
  	  	</div>
  	    <div className="phone">
  	      <div id="pn">Phone Number</div>
  	      <textarea id="phone" cols="30"></textarea>
  	    </div>
  	  </div>
  	);
  }
}





ReactDOM.render(<App />, document.getElementById("app"));


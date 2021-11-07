import React, { Component } from 'react';

class AddContact extends Component {
    state = {
      name: "",
      email: "",
    };
    add = (e) =>{
    e.preventDefault();
    if(this.state.name ==='' || this.state.email===''){
        alert('fields are mandatory');
        return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
        name:"",
        email:"",
    });
    console.log(this.state);
    };
    render() {
        return (
            <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name..."
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="moin@gmail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add button</button>
        </form>
      </div>
        );
    }
}

export default AddContact;

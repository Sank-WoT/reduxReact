import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';
class Chat extends Component {
    render() {
	const rndUsername = faker.internet.userName();
	console.log(this.props);
      return (
	      <div>
	      {this.props.users.map(u => {return <p key={u}>{u}</p>})}
	      <button onClick={() => this.props.addNewUser(rndUsername)}>Add new User
	      </button>
	      <h1>Chat</h1>
      </div>  
       );
  }
}

const mapStateToProps = (state) => {
    return {
	users: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
	addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

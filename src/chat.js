import React, { Component } from 'react';
// импорт функции connect
import { connect } from 'react-redux';
// генератор данных для мок
import faker from 'faker';

class Chat extends Component {
    render() {
	// получим юзер наме
	const rndUsername = faker.internet.userName();
	console.log(this.props);
	// мапим имя оберткой
	// вешаем событие на кнопку и при нажатии добавляем нового человека
      return (
	      <div>
	      {this.props.users.map(u => {return <p key={u}>{u}</p>;})}
	      <button onClick={() => this.props.addNewUser(rndUsername)}>Add new User
	      </button>
	      <h1>Chat</h1>
      </div>  
       );
  }
}
// users = state
const mapStateToProps = (state) => {
    return {
	users: state
    };
}

// прокидка вызова на addNerUser
const mapDispatchToProps = (dispatch) => {
    return {
	addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username })
    };
}
// подключи React компонент к Redux store
// Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

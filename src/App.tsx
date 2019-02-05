import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '.';
import './App.scss';
import { GetUsersRequest, AddUserRequest, RemoveUserRequest } from './store/actions/users.actions';
import { IUser } from './store/models/users.models';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        name: ''
      }
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleAddUser(user: IUser) {
    this.props.addUser(user);
    this.setState({ user: { name: '' } });
  }
  
  handleRemoveUser(userId: string) {
    this.props.removeUser(userId);
  } 

  handleUserName(event: any) {
    this.setState({ user: { name: event.target.value } });
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <div>
          <input
            placeholder="name"
            value={this.state.user.name}
            onChange={() => this.handleUserName(event)}
          />
        </div>
        <div>
          <button onClick={() => this.handleAddUser(this.state.user)}>
            Add
          </button>
        </div>
        <ul>
          {users.map((user: IUser) => (
            <li value={user.name} key={user.name}>
              {user.name} <span className="remove_me" onClick={() => this.handleRemoveUser(user._id)}>REMOVE ME</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    users: state.userModule.users
  };
};

const mapActionsToProps = (dispatch: any) => {
  return {
    getUsers: () => dispatch(GetUsersRequest()),
    addUser: (user: IUser) => dispatch(AddUserRequest(user)),
    removeUser: (userId: string) => dispatch(RemoveUserRequest(userId))
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

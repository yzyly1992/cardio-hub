
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr className="stripe-dark">
    <td className="pa3">{props.user.username}</td>
    <td className="pa3">{props.user.description}</td>
    <td className="pa3">{props.user.duration}</td>
    <td className="pa3">{props.user.date.substring(0,10)}</td>
    <td className="pa3">
      <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
     .then(response => {
       this.setState({ users: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(res => console.log(res.data));
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div className="overflow-auto">
        {/* <h4 className="f6 w-100 mw8 center">Patients List</h4> */}
        <table className="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Username</th>
              <th className="fw6 tl pa3 bg-white">Description</th>
              <th className="fw6 tl pa3 bg-white">Duration</th>
              <th className="fw6 tl pa3 bg-white">Date</th>
              <th className="fw6 tl pa3 bg-white">Actions</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}
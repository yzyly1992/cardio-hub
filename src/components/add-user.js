import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
    }
  }

  // componentDidMount() {
  //   this.setState({ 
  //     users: ['test user'],
  //     username: 'test user'
  //   });
  // }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const user = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
  
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        {/* <h3>Create New User Log</h3> */}
        <form className="pa4 black-80" onSubmit={this.onSubmit}>
          <div className="measure"> 
            <label for="name" className="f6 b db mb2">Patient Name <span className="normal black-60">(required)</span></label>
            <input  type="text"
                required
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="measure"> 
            <label for="description" className="f6 b db mb2">Description </label>
            <input  type="text"
                required
                id="description"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="measure">
            <label for="duration" className="f6 b db mb2">Duration <span className="normal black-60">(in minutes) </span></label>
            <input 
                type="text" 
                id="duration"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="measure">
            <label for="date" className="f6 b db mb2">Date </label>
            <div>
              <DatePicker
                id="date"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="measure mt4">
            <input type="submit" value="Create Patient Case" className="b pa3 input-reset ba b--black bg-transparent grow pointer f6" />
          </div>
        </form>
      </div>
    )
  }
}
import React, { Component } from 'react';

class UserProfile extends Component {
  state = {
    name: 'John Doe',
    age: 25,
    bio: 'I am a software engineer from California.'
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, age, bio } = this.state;

    return (
      <div>
        <h1>Profile</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={age} onChange={this.handleChange} />

          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" value={bio} onChange={this.handleChange}></textarea>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default UserProfile;

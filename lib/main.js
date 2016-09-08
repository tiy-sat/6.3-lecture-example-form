import React from 'react'

export default React.createClass({
  onSubmitHandler(e) {
    e.preventDefault()
    var usernameText = this.refs.username.value;
    this.props.users.map((user) => {
      if(user.username === usernameText){
        console.log(user);
      }
    })
  },
  getDefaultProps() {
    return {
      users: [
        {
          username: "jason",
          password: "password"
        },
        {
          username: "robin",
          password: "turtles"
        }
      ]
    }
  },
  render() {
    return (
      <section>
        <h1>Log in to our app</h1>
        <form method="POST" action="#" onSubmit={this.onSubmitHandler}>
          <input type="username" name="username" placeholder="username" ref="username"/>
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="submit" value="Log In" />
        </form>
      </section>
    )
  }
})

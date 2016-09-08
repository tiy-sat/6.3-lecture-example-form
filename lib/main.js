import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Log in to our app</h1>
        <form method="POST" action="#">
          <input type="username" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" name="submit" value="Log In" />
        </form>
      </section>
    )
  }
})

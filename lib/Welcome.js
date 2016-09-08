import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Welcome {this.props.params.username}</h1>
      </section>
    )
  }
})

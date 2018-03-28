import React from 'react'
import { connect } from 'react-redux'

class Ip extends React.Component {
  render(){
    return (
      <div>
          {JSON.stringify(this.props)}
          <input placeholder='email' ref={ref => this.email = ref} />
          <input placeholder='passwd' ref={ref => this.passwd = ref} />
          <button onClick={() => {
            this.props.load(this.email.value, this.passwd.value)
          }}>Load!</button>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store.load)
  return {
    data: store.load
  }
}
const mapDispatchToProps = dispatch => {
  return {
    load: (email, passwd) => dispatch({ type: 'LOAD_REQUEST', email, passwd })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ip)

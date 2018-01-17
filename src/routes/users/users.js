import React from 'react';
import { connect } from 'dva';
import styles from './users.css'

class Users extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      'value': 'Users'
    }
  }
  change(e){
    this.setState({
      'value': e.target.value
    })
  }
  render(){
    return(
      <div className={styles.normal}>
        <h1>************</h1>
        <h2 className={styles.a}>{this.props.a}</h2>
        <input type='text'onChange={this.change.bind(this)} value={this.state.value}/>
        <h3>{this.state.value}</h3>
      </div>
    )
  }
}

function map_state(state){
  const {a} = state.users
  return{
      a
  }
}
export default connect(map_state)(Users);
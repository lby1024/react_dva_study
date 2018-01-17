import React from 'react';
import { connect } from 'dva';
import styles from './footer.less'

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    change(visible){
        this.props.dispatch({'type': 'todos/change_visible', visible})
    }

    render(){
        return(
            <div className={styles.footer}>
                <span className={this.props.visible===0?styles.cur:''} onClick={this.change.bind(this, 0)}>全部</span>
                <span className={this.props.visible===1?styles.cur:''} onClick={this.change.bind(this, 1)}>已完成</span>
                <span className={this.props.visible===2?styles.cur:''} onClick={this.change.bind(this, 2)}>未完成</span>
            </div>
        )
    }
}

function map_state(state){
    const {list, visible} = state.todos
    return{
        list, 
        visible, 
    }
}
export default connect(map_state)(Footer);
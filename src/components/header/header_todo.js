import React from 'react';
import { connect } from 'dva';
import styles from './header_todo.less'

class HeaderTodo extends React.Component{
    
    add(){
        let item = {
            'title': this.refs.t.value,
            'done': false
        }
        this.props.dispatch({'type': 'todos/add_todo', item})
        this.refs.t.value = ''
    }

    render(){
        return (
            <div className={styles.h}>
                <input type="text" ref="t" />
                <button onClick={this.add.bind(this)}>添加</button>
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
export default connect(map_state)(HeaderTodo);
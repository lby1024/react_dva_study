import React from 'react';
import { connect } from 'dva';
import class_name from 'classnames'
import styles from './list.less'

class Users extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    
    todo_list_visible(){
        if(this.props.visible===0){
            return this.props.list
        }else if(this.props.visible===1){
            return this.props.list.filter(item=> item.done===true)
        }else if(this.props.visible===2){
            return this.props.list.filter(item=> item.done===false)
        }
    }
    change_done(title, done){
        this.props.dispatch({'type': 'todos/change_done', 'title': title, 'done': done})
    }
    del(title){
        this.props.dispatch({'type': 'todos/del', title})
    }
    render(){
        return(
            <div className={styles.list}>
                {
                    this.todo_list_visible().map((item,index)=> {
                        return (
                            <h3 key={index}>
                                <span className={item.done==true?`${styles.done} ${styles.title}`:styles.title}
                                onClick={this.change_done.bind(this, item.title, item.done)} >
                                    {item.title}
                                </span>
                                <span className={styles.close} onClick={this.del.bind(this, item.title)}>X</span>
                            </h3>
                        )
                    })
                }
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
export default connect(map_state)(Users);
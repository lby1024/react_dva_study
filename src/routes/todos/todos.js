import React from 'react';
import { connect } from 'dva';
import styles from './todos.less'
import HeaderTodo from '../../components/header/header_todo'
import List from '../../components/list/list'
import Footer from '../../components/footer/footer'

class Users extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className={styles.todos}>
                <div className={styles.center}>
                    <HeaderTodo></HeaderTodo>
                    <List></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}


export default connect()(Users);
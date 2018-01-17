import React from 'react';
import { Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/users/users'
import Nav from './components/nav'
import Todos from './routes/todos/todos'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Nav></Nav>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users"  component={Users} />
        <Route path="/todos"  component={Todos} />
      </div>
    </Router>
  );
}

export default RouterConfig;

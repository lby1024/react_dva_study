import dva from 'dva';
import './index.css';
import router from './router.js'
import todos from './models/todos'
import users from './models/users'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(todos);
app.model(users);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

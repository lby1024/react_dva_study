const R = require('ramda')
// import R from 'ramda'

export default {
    
      namespace: 'todos',
    
      state: {
          'list': [
            {
                'title': '吃饭',
                'done': true
            },
            {
                'title': '睡觉',
                'done': false
            },
            {
                'title': '拉屎',
                'done': false
            }
          ],
          'visible': 0,
      },
    
      effects: {
       
      },
    
      reducers: {
        // 增
        add_todo(state, action) {
            let list = R.insert(0, action.item, state.list)
            return R.set(R.lensProp('list'), list, state)
        },
        // 删
        del(state, action){
            let list = state.list.filter(item=> item.title!=action.title)
            console.log(list)
            return R.set(R.lensProp('list'), list, state)
        },
        // change==> action 等于==> {'type': 'todos/change_todo', a}
        change_visible(state, action) {
            return R.set(R.lensProp('visible'), action.visible, state)
        },
        change_done(state, action) {
            let list = state.list.map((item, index)=> {
                if(item.title==action.title){
                    return R.set(R.lensProp('done'), !action.done, item)
                }
                return item
            })
            return R.set(R.lensProp('list'), list, state)
        }
      },
    
    };
const app = Vue.createApp({
    data() {
        return {
          newTodoText: '',
          todos: [
              {
                  id: 1,
                  title: 'Do the dishes'
              },
              {
                  id: 2,
                  title: 'Take out the trash'
              },
              {
                  id: 3,
                  title: 'Mow the lawn'
              }
          ],
          nextTodoId: 4
        }
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
     
    }
}) 
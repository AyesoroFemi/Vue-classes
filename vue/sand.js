const app = Vue.createApp({
    data() {
        return {
            message: 'Nigeria is a great nation',
            awesome: false,
            styleObject: {
                color: 'red',
                fontSize: '30px'
            },
          groceryList: [
               { id: 0, text: 'Vegetables' },
               { id: 1, text: 'Cheese' },
               { id: 2, text: 'Whatever else humans are supposed to eat'}
           ],
           posts: [
               { id: 1, title: 'My journey with Vue' },
               { id: 2, title: 'Blogging with Vue' },
               { id: 3, title: 'Why Vue is so fun '}
           ],
           numbers: [ 1, 2, 3, 4, 5 ]
        }
    },
    computed: {
        evenNumbers() {
            return this.evenNumbers.filter(number => {
                number % 2 === 0 
            })
        }
    }
})
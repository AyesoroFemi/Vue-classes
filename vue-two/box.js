const app = Vue.createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'My Journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why vue is the best '}
            ],
            postFontSize: 1
        }
    }
})
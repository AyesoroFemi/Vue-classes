app.component('blog-post', {
    props: ['title'],
    emits: ['enlarge-text'],
    template: `
        <div class="blog-post">
            <h4> {{ title }} </h4>
            <button @click="$emit('enlarge-text')">Enlarge Text</button>
        </div>
    `
})